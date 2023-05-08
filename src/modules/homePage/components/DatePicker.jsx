import React from "react";
import { useState } from "react";
import styled from "./styleHome.module.css";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/light.css";
function DatePicker(props) {
  const [visibleDate, setVisibilityDate] = useState(true);
  const [visibleMonth, setVisibilityMonth] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
      setSelectedDate(date);
  };

  const includeDates = [
    new Date(2023, 4, 10),
    new Date(2023, 4, 15),
    new Date(2023, 4, 20),
  ];
  const onChange = (event) => {
    const value = event.target.value;
    props.onChangeSelectedType(value);
    //setSelectValue(value);
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
        <Flatpickr
          style={{ width: "90px" }}
          value={selectedDate}
          options={{
            enable: includeDates,
            maxDate: includeDates[includeDates.length - 1],
            minDate: includeDates[0],
            mode: "single",
          }}
          onChange={handleDateChange}
        />
      )}

      {visibleMonth && (
        <select
          name="Month"
          lassName={`${styled["filedDateMonth"]}`}
          onChange={(e) => {
            let selectedTimeArr = e.currentTarget.value.split("/");
            props.onChangeSelectedMonth(selectedTimeArr[0]);
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
