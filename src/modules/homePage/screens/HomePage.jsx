import { Container, Row, Col } from "react-bootstrap";
import DatePicker from "../components/DatePicker";
import "react-datepicker/dist/react-datepicker.css";
import React, { useState } from "react";
import AppLineChart from "../../../globalComponents/LineChart";
import StudentCenterInfo from "../components/StudentCenterInfo";
import ClassList from "../../../globalComponents/ClassList";
import BreadCrumbs from "../../classesPage/components/BreadCrumbs";
import Stack from "react-bootstrap/Stack";
import { Link } from "react-router-dom";

function HomePage() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <Container fluid="md">
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
        <Col >
          {/* <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
          /> */}
          <DatePicker></DatePicker>
        </Col>
      </Row>
      <AppLineChart />

      <StudentCenterInfo />
      <ClassList />
    </Container>
  );
}

export default HomePage;
