import React from "react";
import styled from "styled-components";
import colors from "../utils/style/colors";
import EmployeeForm from "../Components/Form/EmployeeForm";
import HeaderLanding from "../Components/HeaderLanding";

const Title = styled.h1`
  color: ${colors.primary};
  font-size: 2em;
  font-weight: 700;
  margin: 0;
  padding-top: 0.5em;
  text-align: left;
  font-family: 'Merriweather Sans', sans-serif;
`;


export default function Home() {
  
  return (
    <>
      <HeaderLanding />
      <main>
        <Title>Create Employee</Title>
        <EmployeeForm/>
      </main>
    </>
  );
}
