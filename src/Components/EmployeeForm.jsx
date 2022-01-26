import React from "react";
import { useState } from "react";
import useStore from "../store";
import { useForm, Controller } from "react-hook-form";
import styled from "styled-components";
import SelectInput from "./SelectInput";
import DateInput from "./DateInput";
import DatePicker from "react-datepicker";
import { departments, states } from "../selectLists";
import colors from "../utils/style/colors";

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
  @media screen and (min-width: 772px){
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
  @media screen and (min-width: 772px){
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
  @media screen and (min-width: 772px){
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
  margin-bottom: 1rem;
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
  :hover {
    background-color: #1dd1a1;
  }
  :active {
    background-color: ${colors.tertiary};
  }
`;

export default function EmployeeForm() {
  const { register, errors, handleSubmit, control } = useForm();
  const addEmployee = useStore((state) => state.addEmployee);
  const onSave = (data) => {
    console.log("RESULT", data);
    addEmployee(data);
  };
  console.log(errors);
  return (
    <Form onSubmit={handleSubmit(onSave)}>
      <InfoCtr>
        <EmployeeCtnr>
          <InputWrapper>
            <label htmlFor="firstName">First Name</label>
            <input type="text" placeholder="François" {...register("firstName", { required: true, maxLength: 80 })} />
          </InputWrapper>
          <InputWrapper>
            <label htmlFor="lastName">Last Name</label>
            <input type="text" placeholder="Juno" {...register("lastName", { required: true, maxLength: 80 })} />
          </InputWrapper>
          <InputWrapper>
            <label htmlFor="birthDate">Date of Birth</label>
            <Controller
              name="birthDate"
              control={control}
              render={({field}) => (
                <DatePicker
                  type="date" 
                  placeholderText="Select a date" 
                  onChange={(date) => {
                    field.onChange(date);
                  }}
                  selected={field.value}
                  />
              )}
            />
          </InputWrapper>
          <InputWrapper>
            <label htmlFor="startDate">Start date</label>
            <Controller
              name="startDate"
              control={control}
              render={({field}) => (
                <DatePicker
                  type="date" 
                  placeholderText="Select a date" 
                  onChange={(date) => {
                    field.onChange(date);
                  }}
                  selected={field.value}
                  />
              )}
            />
          </InputWrapper>
          <InputWrapper>
            <label htmlFor="department">Department</label>
            <SelectInput register={register} name="department" options={departments} registerOptions={{ required: true }} />
          </InputWrapper>
        </EmployeeCtnr>
        <AdressCtnr>
          <Legend>Address</Legend>
          <InputWrapper>
            <label htmlFor="street">Street</label>
            <input type="text" placeholder="21 Jump Street" {...register("street", { required: true })} />
          </InputWrapper>
          <InputWrapper>
            <label htmlFor="city">City</label>
            <input type="text" placeholder="Vancouver" {...register("city", { required: true })} />
          </InputWrapper>
          <InputWrapper>
            <label htmlFor="state">State</label>
            <SelectInput register={register} name="state" options={states} registerOptions={{ required: true }} />
          </InputWrapper>
          <InputWrapper>
            <label htmlFor="zipCode">Zip code</label>
            <input type="number" placeholder="59000" {...register("zipCode", { required: true })} />
          </InputWrapper>
        </AdressCtnr>
      </InfoCtr>
      <SaveBtn type="submit">Save</SaveBtn>
    </Form>
  );
}
