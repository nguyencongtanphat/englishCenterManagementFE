import React from "react";
import { useState } from "react";
import styled from "./styleHome.module.css";
function DatePicker() {
  const [visibleDate, setVisibilityDate] = useState(true);
  const [visibleMonth, setVisibilityMonth] = useState(false);
  // FILTER OPTION
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1);
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
    const [selectValue, setSelectValue] = useState("Date");
  
  const onChange = (event) => {
    const value = event.target.value;

    setSelectValue(value);
    if (value === "Date") {
      setVisibilityDate(true);
      setVisibilityMonth(false);
    } else if (value === "Month") {
      setVisibilityDate(false);
      setVisibilityMonth(true);
    } else {
      setVisibilityDate(false);
      setVisibilityMonth(false);
    }
  };
  return (
    <div className={`${styled["filterTime"]}`}>
      <select onChange={onChange} className={`${styled["dropDown"]}`}>
        <option defaultValue value="Date">
          Date
        </option>
        <option value="Month">Month</option>
        <option value="Period">Period</option>
      </select>

      {visibleDate && (
        <input
          type="Date"
          className={`${styled["filedDateMonth"]}`}
          onChange={(e) => {
            // retrieveFilterType(filterTypeOption.daily);
            // retrieveSelectedDate(e.currentTarget.value);
          }}
        ></input>
      )}

      {visibleMonth && (
        <select
          name="Month"
          lassName={`${styled["filedDateMonth"]}`}
          onChange={(e) => {
            let selectedTimeArr = e.currentTarget.value.split("/");
            // setSelectedMonth(selectedTimeArr[0]);
            // setSelectedYear(selectedTimeArr[1]);
            // retrieveFilterType(filterTypeOption.monthly);
          }}
        >
          <option selected value={"12/2022"}>
            12/2022
          </option>
          <option value={"1/2023"}>01/2023</option>
          <option value={"2/2023"}>02/2023</option>
          <option value={"3/2023"}>03/2023</option>
          <option value={"4/2023"}>04/2023</option>
        </select>
      )}
    </div>
  );
}

export default DatePicker;
