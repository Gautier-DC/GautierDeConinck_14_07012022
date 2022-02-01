import React from "react";
import { useState } from "react";
import useStore from "../store";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import styled from "styled-components";
import SelectInput from "./SelectInput";
import { CustomHeader } from "./FeaturesDatepicker";
import DatePicker from "react-datepicker";
import { departments, states } from "../selectLists";
import colors from "../utils/style/colors";

//CSS part
const Form = styled.form`
  padding: 2em 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  height: 70%;
`;

const InfoCtr = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 2rem;
  width: 100%;
  @media screen and (min-width: 772px) {
    flex-direction: row;
  }
`;

const EmployeeCtnr = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  @media screen and (min-width: 772px) {
    width: 40%;
  }
`;

const AdressCtnr = styled.fieldset`
  width: 100%;
  height: 100%;
  border-radius: 0.5em;
  border: 3px solid ${colors.tertiary};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  @media screen and (min-width: 772px) {
    width: 55%;
  }
`;

const Legend = styled.legend`
  padding: 0 0.8rem 0.8rem 0.8rem;
  font-size: 1.5em;
  font-weight: bold;
  text-align: left;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-bottom: 0.5em;
  width: 100%;
  label {
    font-weight: bold;
    margin-bottom: 0.5em;
  }
  input {
    padding: 0.5em 0.6em;
    border-radius: 0.2em;
    width: 100%;
    border: none;
    box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;
  }
`;

const SaveBtn = styled.button`
  cursor: pointer;
  border: none;
  border-radius: 0.5em;
  padding: 0.7em 1.6em;
  background-color: ${colors.tertiary};
  color: #fff;
  font-size: 1.2em;
  font-weight: bold;
  float: left;
  transition: all 0.3s;
  :hover {
    background-color: #1dd1a1;
  }
  :active {
    background-color: ${colors.tertiary};
  }
`;

const ErrorField = styled.p`
  color: #e55039;
  padding-top: 0.5em;
  margin: 0;
`;

//Function part

const schema = yup
  .object({
    firstName: yup.string().min(2).max(20),
    lastName: yup.string().min(2).max(20),
    birthDate: yup.string().min(1),
    startDate: yup.date(),
    department: yup.string(),
    street: yup.string().min(5),
    city: yup.string().min(3),
    state: yup.string().min(3),
    zipCode: yup.number().positive().integer(),
  })
  .required();

export default function EmployeeForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    control,
    reset,
  } = useForm({ resolver: yupResolver(schema) });
  const addEmployee = useStore((state) => state.addEmployee);
  const onSave = (data) => {
    console.log("RESULT", data);
    addEmployee(data);
    reset();
  };
  console.log(errors);
  return (
    <Form onSubmit={handleSubmit(onSave)}>
      <InfoCtr>
        <EmployeeCtnr>
          <InputWrapper>
            <label htmlFor="firstName">First Name</label>
            <input type="text" placeholder="François" {...register("firstName")} />
            <ErrorField>{errors.firstName && "First name must be at least 2 characters"}</ErrorField>
          </InputWrapper>
          <InputWrapper>
            <label htmlFor="lastName">Last Name</label>
            <input type="text" placeholder="Juno" {...register("lastName", { required: true, maxLength: 80 })} />
            <ErrorField>{errors.lastName && "Last name must be at least 2 characters"}</ErrorField>
          </InputWrapper>
          <InputWrapper>
            <label htmlFor="birthDate">Date of Birth</label>
            <Controller
              name="birthDate"
              control={control}
              render={({ field }) => (
                <DatePicker
                  type="date"
                  placeholderText="Select a date"
                  onChange={(date) => {
                    field.onChange(date);
                  }}
                  selected={field.value}
                  renderCustomHeader={CustomHeader}
                  todayButton="Today"
                />
              )}
            />
            <ErrorField>{errors.birthDate && "Incorrect Date"}</ErrorField>
          </InputWrapper>
          <InputWrapper>
            <label htmlFor="startDate">Start date</label>
            <Controller
              name="startDate"
              control={control}
              render={({ field }) => (
                <DatePicker
                  type="date"
                  placeholderText="Select a date"
                  onChange={(date) => {
                    field.onChange(date);
                  }}
                  selected={field.value}
                  renderCustomHeader={CustomHeader}
                  todayButton="Today"
                />
              )}
            />
            <ErrorField>{errors.startDate && "Incorrect Date"}</ErrorField>
          </InputWrapper>
          <InputWrapper>
            <label htmlFor="department">Department</label>
            <SelectInput register={register} name="department" options={departments} registerOptions={{ required: true }} />
            <ErrorField>{errors.department?.message}</ErrorField>
          </InputWrapper>
        </EmployeeCtnr>
        <AdressCtnr>
          <Legend>Address</Legend>
          <InputWrapper>
            <label htmlFor="street">Street</label>
            <input type="text" placeholder="21 Jump Street" {...register("street", { required: true })} />
            <ErrorField>{errors.street?.message}</ErrorField>
          </InputWrapper>
          <InputWrapper>
            <label htmlFor="city">City</label>
            <input type="text" placeholder="Vancouver" {...register("city", { required: true })} />
            <ErrorField>{errors.city?.message}</ErrorField>
          </InputWrapper>
          <InputWrapper>
            <label htmlFor="state">State</label>
            <SelectInput register={register} name="state" options={states} registerOptions={{ required: true }} />
            <ErrorField>{errors.state?.message}</ErrorField>
          </InputWrapper>
          <InputWrapper>
            <label htmlFor="zipCode">Zip code</label>
            <input type="number" placeholder="59000" {...register("zipCode", { required: true })} />
            <ErrorField>{errors.zipCode && "Please insert a correct Zip code"}</ErrorField>
          </InputWrapper>
        </AdressCtnr>
      </InfoCtr>
      <SaveBtn type="submit">Save</SaveBtn>
    </Form>
  );
}
