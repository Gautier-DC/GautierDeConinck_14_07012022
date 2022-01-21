import React from "react";
import { useState } from "react";
import styled from "styled-components";
import SimpleInput from "../Components/SimpleInput";
import SelectInput from "./SelectInput";
import DateInput from "./DateInput";
import { departments } from "../selectLists";

const EmployeeCtnr = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;

export default function EmployeeContainer() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [startDate, setStartDate] = useState("");
  const [department, setDepartment] = useState("");

  return (
    <EmployeeCtnr>
      <SimpleInput type="text" backLabel="first-name" label="First Name" setFunction={setFirstName} required />
      <SimpleInput type="text" backLabel="last-name" label="Last Name" setFunction={setLastName} required />
      <DateInput backLabel="date-of-birth" label="Date of Birth" setFunction={setBirthDate} required />
      <DateInput backLabel="start-date" label="Start Date" setFunction={setStartDate} required />
      <SelectInput backLabel="department" label="Department" setFunction={setDepartment} options={departments} />
    </EmployeeCtnr>
  );
}
