import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import colors from "../utils/style/colors";

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 4em 4em 0 4em; 
  padding: 1em 2em;
  background-color: rgba(255,255,255, 0.9);
  border-radius: 1em 1em 0 0;
`;

const HeaderLogo = styled(Link)`
  display: flex;
  align-items: center;
  margin-right: auto;
  img {
    max-width: 100%;
    height: 50px;
  }
`;

const Title = styled.h1`
  color: ${colors.primary};
  font-size: 2em;
  font-weight: 700;
  margin: 0;
  margin-right: auto;
  padding-top: 0.5em;
  text-align: center;
`;



export default function HeaderEmployeeList() {
  return (
    <HeaderContainer>
        <HeaderLogo to='/'>
            <img src="./logo-hrnet-500.png" alt="HRnet logo" />
        </HeaderLogo>
        <Title>Current Employees</Title>
    </HeaderContainer>
  )
}
