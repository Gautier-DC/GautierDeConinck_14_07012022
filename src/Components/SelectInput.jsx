import React from "react";
import styled from "styled-components";

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
  select {
    padding: 0.2em 0.6em;
    font-size: 1.2rem;
    border-radius: 0.2em;
    border: none;
    box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;
  }
`;

export default function SelectInput({ backLabel, label, setFunction, options }) {
  return (
    <InputWrapper>
      <label htmlFor={backLabel}>{label}</label>
      <select
        id={backLabel}
        name={backLabel}
        onChange={(e) => {
          setFunction(e.target.value);
        }}
      >
        {options.map((option, index) => {
          return (
            <option value={option} key={option + index}>
              {option}
            </option>
          );
        })}
      </select>
    </InputWrapper>
  );
}
