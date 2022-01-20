import React from "react";
import { useState } from "react";
import styled from "styled-components";
import colors from "../utils/style/colors";
import SimpleInput from "../Components/SimpleInput";
import EmployeeContainer from "../Components/EmployeeContainer";
import AdressContainer from "../Components/AdressContainer";

const Title = styled.h1`
  color: ${colors.primary};
  font-size: 2em;
  font-weight: 700;
  margin: 0;
  padding-top: 0.5em;
  text-align: left;
`;

const Form = styled.form`
  padding: 2em 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  height: 70%;
`;

const SaveBtn = styled.button`
  border: none;
  border-radius: 0.5em;
  padding: 0.7em 1.6em;
  background-color: ${colors.tertiary};
  color: #fff;
  font-size: 1.2em;
  font-weight: bold;
  float: left;
`;

export default function Home() {
  return (
    <main>
      <Title>Create Employee</Title>
      <Form>
        <EmployeeContainer />
        <AdressContainer />
      </Form>
      <SaveBtn type="submit" value="submit">
        Save
      </SaveBtn>
    </main>
  );
}
