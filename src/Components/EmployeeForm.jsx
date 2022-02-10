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
import { Modal } from "gdc-component-modal";
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
  .react-datepicker__day--outside-month {
    color: #ccc8c8 !important;
    pointer-events: none;
  }
  .react-datepicker__day--selected,
  .react-datepicker__day--keyboard-selected {
    background-color: ${colors.primary};
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

//YUP schema to avoid empty fields
const schema = yup
  .object({
    firstName: yup.string().min(2).max(20),
    lastName: yup.string().min(2).max(20),
    birthDate: yup.date().test("Birth Date", "Must be a valid date", (value) => {
      return value;
    }),
    startDate: yup.date().test("Start Date", "Must be a valid date", (value) => {
      return value;
    }),
    department: yup.string(),
    street: yup.string().min(5),
    city: yup.string().min(3),
    state: yup.string().min(3),
    zipCode: yup.number().positive().integer(),
  })
  .required();

export default function EmployeeForm() {
  const [show, setShow] = useState(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
    control,
    reset,
  } = useForm({ resolver: yupResolver(schema) });

  const addEmployee = useStore((state) => state.addEmployee);
  //Submit function
  const onSave = (data) => {
    addEmployee(data);
    reset({ firstName: "", lastName: "", birthDate: "", startDate: "", department: "Sales", street: "", city: "", state: "Alabama", zipCode: "" });
    setShow(true);
  };

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
            <input type="text" placeholder="Juno" {...register("lastName")} />
            <ErrorField>{errors.lastName && "Last name must be at least 2 characters"}</ErrorField>
          </InputWrapper>
          <InputWrapper>
            <label htmlFor="birthDate">Date of Birth</label>
            <Controller
              name="birthDate"
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <DatePicker
                  type="date"
                  dateFormat="dd/MM/yyyy"
                  placeholderText="Select a date"
                  onChange={(date) => {
                    onChange(date);
                  }}
                  onBlur={onBlur}
                  selected={value}
                  renderCustomHeader={CustomHeader}
                  todayButton="Today"
                />
              )}
            />
            <ErrorField>{errors.birthDate && "Must be a valid Date"}</ErrorField>
          </InputWrapper>
          <InputWrapper>
            <label htmlFor="startDate">Start date</label>
            <Controller
              name="startDate"
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <DatePicker
                  type="date"
                  dateFormat="dd/MM/yyyy"
                  placeholderText="Select a date"
                  onChange={(date) => {
                    onChange(date);
                  }}
                  onBlur={onBlur}
                  selected={value}
                  renderCustomHeader={CustomHeader}
                  todayButton="Today"
                />
              )}
            />
            <ErrorField>{errors.startDate && "Must be a valid Date"}</ErrorField>
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
            <input type="number" placeholder="59000" {...register("zipCode")} />
            <ErrorField>{errors.zipCode && "Please insert a correct Zip code"}</ErrorField>
          </InputWrapper>
        </AdressCtnr>
      </InfoCtr>
      <SaveBtn type="submit">Save</SaveBtn>
      <Modal title="Employé créé" onClose={() => setShow(false)} show={show}>
        <p>L'employé a été ajouté à la base !</p>
      </Modal>
    </Form>
  );
}
