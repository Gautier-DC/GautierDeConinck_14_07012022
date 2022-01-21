import React from "react";
import DatePicker from "react-datepicker";
import { useState } from "react";
import { getMonth, getYear } from "date-fns";
import range from "lodash/range";
import styled from "styled-components";
import "react-datepicker/dist/react-datepicker.css";
import colors from "../utils/style/colors";

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
    width: 100%;
    padding: 0.2em 0.6em;
    font-size: 1.2rem;
    border-radius: 0.2em;
    border: none;
    box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;
  }
  select{
      background: none;
      border: none;
  }
`;

const CustomDatePicker = styled(DatePicker)`
  width: 800px;
`;
const CustomArrow = styled.button`
  font-weight: 700;
  color: ${colors.tertiary};
  border: none;
  font-size: 1.5em;
  :hover {
    box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;
  }
`;

export default function DateInput({ backLabel, label, required }) {
  const [startDate, setStartDate] = useState(new Date());
  const years = range(1940, getYear(new Date()) + 1, 1);
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  return (
    <InputWrapper>
      <label htmlFor={backLabel}>{label}</label>
      <CustomDatePicker
        id={backLabel}
        name={backLabel}
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        renderCustomHeader={({ date, changeYear, changeMonth, decreaseMonth, increaseMonth, prevMonthButtonDisabled, nextMonthButtonDisabled }) => (
          <div
            style={{
              marginBottom: '10px',
              padding: "0 7px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <CustomArrow onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
              {"◄"}
            </CustomArrow>
            <select value={months[date.getMonth()]} onChange={({ target: { value } }) => changeMonth(months.indexOf(value))}>
              {months.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <select value={date.getFullYear()} onChange={({ target: { value } }) => changeYear(value)}>
              {years.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>

            <CustomArrow onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
              {"►"}
            </CustomArrow>
          </div>
        )}
        dropdownMode="select"
        required={required ? true : false}
        todayButton="Today"
        popperModifiers={[
          {
            name: "offset",
            options: {
              offset: [5, 10],
            },
          },
          {
            name: "preventOverflow",
            options: {
              rootBoundary: "viewport",
              tether: false,
              altAxis: true,
            },
          },
        ]}
      />
    </InputWrapper>
  );
}
