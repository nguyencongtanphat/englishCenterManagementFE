import { Container, Row, Col } from "react-bootstrap";
import DatePicker from "../components/DatePicker"
import "react-datepicker/dist/react-datepicker.css";
import React, { useState } from "react";
import AppLineChart from "../../../globalComponents/LineChart";
import StudentCenterInfo from "../components/StudentCenterInfo";
import ClassList from "../../../globalComponents/ClassList";

import { Link } from "react-router-dom";
import { useEffect } from "react";
import { HomeService } from "../../../service";

function HomePage() {
  const [topStudents, setTopStudent] = useState([]);
  const [classes, setClasses] = useState([]);
  const [selectValue, setSelectValue] = useState("Month");
  const [date, setDate] = useState(null);
  const [month, setMonth] = useState(null);
  const [isPeriod, setIsPeriod] = useState(false)
  const [lineChartData, setLineChartData] = useState([]);
  const [pieChartData, setPieChartData] = useState([]);
  
  const onChangeSelectedType = (newValue)=>{
    console.log("here changed selected", newValue);
    setSelectValue(newValue);
  }
  const onChangeSelectedDate = (newValue)=>{
    console.log("date selected:", newValue[0]);
    const dateString = newValue[0].toISOString().slice(0, 10); 
    setMonth(null)
    setDate(dateString);
    
  }
  const onChangeSelectedMonth = (newValue)=>{
    setDate(null)
    setMonth(newValue);
  }

  useEffect(()=>{
    const getClassData = async ()=>{
      const classes = await  HomeService.getClass()
      setClasses(classes)
    }
    getClassData();
  },[])

  useEffect(() => {
    const getHomeData = async () => {
      try {
        console.log("run 11")
        const [students, centerReport, pieChartReport] = await Promise.all([
          HomeService.getTopStudent(),
          HomeService.getLineChartData({ month: month, date: date, isPeriod: isPeriod }),
          HomeService.getPieChartData({month: month, date: date, isPeriod: isPeriod})
        ]);
        setPieChartData(pieChartReport);
        //extra data for line chart
        const lineChartData = centerReport.map((report) => {
          const dateReport = new Date(report.Date);
          return {
            key: `${dateReport.getDate().toString().padStart(2, "0")}/${(
              dateReport.getMonth() + 1
            )
              .toString()
              .padStart(2, "0")}/${dateReport.getFullYear().toString()}`,
            value: report.CenterScore,
          };
        });
        setLineChartData(lineChartData);
        setTopStudent(students);
       
      } catch (e) {
        console.log(e);
      }
    };
    getHomeData();
  }, [ date, isPeriod, month, selectValue]);

  
  return (
    <Container fluid="md">
      {selectValue}
      <Row className="mt-3">
        <Col>
          <Link
            key="Home"
            to="/"
            className="me-3"
            style={{
              textDecoration: "none",
              color: "#1B64F2",
              fontSize: "14px",
            }}
          >
            Home
          </Link>
          <h3 className="mb-3">
            <b>Dashboard</b>
          </h3>
        </Col>
        <Col>
          <DatePicker
            onChangeSelectedType={onChangeSelectedType}
            onChangeSelectedDate={onChangeSelectedDate}
            onChangeSelectedMonth={onChangeSelectedMonth}
          />
        </Col>
      </Row>
      <AppLineChart data={lineChartData} />

      <StudentCenterInfo
        pieChartData={pieChartData}
        topStudents={topStudents}
      />
      <ClassList classes={classes} />
    </Container>
  );
}

export default HomePage;
