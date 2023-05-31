import React from "react";
import { useState } from "react";
import styled from "./styleHome.module.css";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/light.css";
import { useEffect } from "react";
import { HomeService } from "../../../service";

function DatePicker(props) {
  const [visibleDate, setVisibilityDate] = useState(true);
  const [visibleMonth, setVisibilityMonth] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [datesList, setDatesList] = useState([])
  const [monthsList, setMonthsList] = useState([]);

  useEffect(() => {
    const getDate = async () => {
      const {dates, months} = await HomeService.getDateCenter();

      setDatesList(dates);
      setMonthsList(months);
      
    };
    getDate()
  }, []);

  const handleDateChange = (date) => {
    console.log("Date changed,", date)
    setSelectedDate(date);
  };

 
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
            enable: datesList,
            maxDate: datesList[datesList.length - 1],
            minDate: datesList[0],
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
          {monthsList.map((month) => (
            <option value={month}>{month}</option>
          ))}
        </select>
      )}
    </div>
  );
}

export default DatePicker;
