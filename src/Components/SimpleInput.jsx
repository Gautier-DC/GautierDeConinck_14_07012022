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
  input {
    padding: 0.5em 0.6em;
    border-radius: 0.2em;
    border: none;
    box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;
  }
`;

export default function SimpleInput({ type, backLabel, label, setFunction, required }) {
  return (
    <InputWrapper>
      <label htmlFor={backLabel}>{label}</label>
      <input
        type={type}
        id={backLabel}
        name={backLabel}
        onChange={(e) => {
          setFunction(e.target.value);
        }}
        required={required ? true : false}
      ></input>
    </InputWrapper>
  );
}
