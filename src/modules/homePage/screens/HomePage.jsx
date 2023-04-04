import { Container, Row, Col } from "react-bootstrap";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import React, { useState } from "react";
import AppLineChart from "../../../globalComponents/LineChart";
import StudentCenterInfo from "../components/StudentCenterInfo";
import ClassList from "../../../globalComponents/ClassList";
import BreadCrumbs from "../../classesPage/components/BreadCrumbs";

function HomePage() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <Container fluid="md">
      <BreadCrumbs/>
      <Row>
        <Col>
          <h2>Cente Dashboard</h2>
        </Col>
        <Col className="text-end">
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
          />
        </Col>
      </Row>
      <AppLineChart />
      
      <StudentCenterInfo />
      <ClassList />
    </Container>
  );
}

export default HomePage;
