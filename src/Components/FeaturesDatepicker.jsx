import React from "react";
import { getMonth, getYear } from "date-fns";
import range from "lodash/range";
import styled from "styled-components";
import "react-datepicker/dist/react-datepicker.css";
import colors from "../utils/style/colors";

//CSS part
const Arrow = styled.button`
  background-color: #f0f0f0;
  appearance: none;
  user-select: none;
  outline: none !important;
  display: inline-block;
  position: relative;
  cursor: pointer;
  padding: 0;
  border: none;
  border-top: 0.8em solid transparent;
  border-bottom: 0.8em solid transparent;
  transition: all 0.25s ease-out;
`;

const ArrowLeft = styled(Arrow)`
  border-right: 1.2em solid #ccc;
  left: 0.5em;
  :hover {
    border-right-color: ${colors.secondary};
  }
`;

const ArrowRight = styled(Arrow)`
  border-left: 1.2em solid #ccc;
  right: 0.5em;
  :hover {
    border-left-color: ${colors.secondary};
  }
`;

const CalendarHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  padding: 0 0.5em;
  div {
    width: 100%;
  }
  option {
    border: none;
    padding: 20px;
  }
`;

const DateSelect = styled.select`
  background-color: transparent;
  border: none;
  text-align: right;
  width: 35%;
`;

const MonthSelect = styled.select`
  background-color: transparent;
  border: none;
  text-align: right;
  width: 50%;
`;

//Function part
// Define a Range of minus 60 years to + 3 years
const years = range(getYear(new Date()) - 60, getYear(new Date()) + 3);
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export function CustomHeader({ date, changeYear, changeMonth, decreaseMonth, increaseMonth, prevMonthButtonDisabled, nextMonthButtonDisabled }) {
  //These 2 functions are here just to avoid the onClick on arrows to also submit the form
  const previousMonth = (e) => {
    e.preventDefault();
    decreaseMonth();
  }
  const nextMonth = (e) => {
    e.preventDefault();
    increaseMonth();
  }
  return (
    <CalendarHeader>
      <ArrowLeft onClick={previousMonth} disabled={prevMonthButtonDisabled}></ArrowLeft>
      <div>
        <MonthSelect value={months[getMonth(date)]} onChange={({ target: { value } }) => changeMonth(months.indexOf(value))}>
          {months.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </MonthSelect>
        <DateSelect value={date.getFullYear()} onChange={({ target: { value } }) => changeYear(value)}>
          {years.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </DateSelect>
      </div>
      <ArrowRight onClick={nextMonth} disabled={nextMonthButtonDisabled}></ArrowRight>
    </CalendarHeader>
  );
}