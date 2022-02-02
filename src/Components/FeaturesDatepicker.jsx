import React from "react";
import DatePicker from "react-datepicker";
import { useState } from "react";
import { getDate, getMonth, getYear } from "date-fns";
import range from "lodash/range";
import styled from "styled-components";
import "react-datepicker/dist/react-datepicker.css";
import colors from "../utils/style/colors";

//CSS part

const CustomDatePicker = styled(DatePicker)`
  width: 100%;
`;

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
const years = range(1940, getYear(new Date()) + 1, 1);
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export function CustomHeader({ date, changeYear, changeMonth, decreaseMonth, increaseMonth, prevMonthButtonDisabled, nextMonthButtonDisabled }) {
  // const onMonthChange = ({ target: { value } }) => {
  //   changeMonth(months.indexOf(value));
  //   setCurrentMonth(value);
  //   console.log("+++++", currentMonth);
  // };
  return (
    <CalendarHeader>
      <ArrowLeft onClick={decreaseMonth} disabled={prevMonthButtonDisabled}></ArrowLeft>
      <div>
        <MonthSelect value={months[date.getMonth()]}>
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
      <ArrowRight onClick={increaseMonth} disabled={nextMonthButtonDisabled}></ArrowRight>
    </CalendarHeader>
  );
}

export function DateInput({ register, name, registerOptions, ...rest }) {
  const [startDate, setStartDate] = useState(new Date());
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const renderDayContents = (day, date) => {
    const tooltipText = `For datessssss: ${date}`;
    return (
      <span style={{ backgroundColor: "red" }} title={tooltipText}>
        {getDate(date)}
      </span>
    );
  };
  // custom header for date picker
  return (
    <CustomDatePicker
      shouldCloseOnSelect={false}
      renderCustomHeader={CustomHeader}
      selected={startDate}
      dropdownMode="select"
      todayButton="Today"
      calendarClassName="calendar-custom"
      renderDayContents={renderDayContents}
    />
  );
}
