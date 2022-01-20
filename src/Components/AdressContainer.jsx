import React from "react";
import { useState } from "react";
import styled from "styled-components";
import colors from "../utils/style/colors";
import { states } from "../selectLists";
import SimpleInput from "./SimpleInput";
import SelectInput from "./SelectInput";

const AdressCtnr = styled.fieldset`
  width: 55%;
  height: 100%;
  border-radius: 0.5em;
  border: 3px solid ${colors.tertiary};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;

const Legend = styled.legend`
  padding: 0 0.8rem 0.8rem 0.8rem;
  font-size: 1.5em;
  font-weight: bold;
  text-align: left;
`;

export default function AdressContainer() {
  const [streetName, setStreetName] = useState("");
  const [cityName, setCityName] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [stateName, setStateName] = useState("");

  return (
    <AdressCtnr>
      <Legend>Address</Legend>
      <SimpleInput type="text" backLabel="street" label="Street" setFunction={setStreetName} required />
      <SimpleInput type="text" backLabel="city" label="City" setFunction={setCityName} required />
      <SelectInput backLabel="state" label="State" setFunction={setStateName} options={states}/>
      <SimpleInput type="number" backLabel="zip-code" label="Zip code" setFunction={setZipCode} required />
    </AdressCtnr>
  );
}
