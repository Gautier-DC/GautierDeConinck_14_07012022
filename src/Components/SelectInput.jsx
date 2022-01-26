import React from "react";
import styled from "styled-components";

const StyledSelect = styled.select`
  background-color: #fff;
  padding: 0.5em 0.6em;
  border-radius: 0.2em;
  border: none;
  box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;
`;

export default function SelectInput({ register, options, name, registerOptions, ...rest }) {
  if (!register) {
    return null;
  }

  return (
    <StyledSelect {...register(name, registerOptions)} {...rest}>
      {options.map((option, index) => {
        return (
          <option value={option} key={option + index}>
            {option}
          </option>
        );
      })}
    </StyledSelect>
  );
}
