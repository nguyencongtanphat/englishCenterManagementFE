import { Container, Row, Col } from "react-bootstrap";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import React, { useState } from "react";
import AppLineChart from "../../../globalComponents/LineChart";
import CircleChartExample from "../../../globalComponents/CirlceChart";
import StudentCenterInfo from "../components/StudentCenterInfo";
import ClassList from "../../../globalComponents/ClassList";

function HomePage() {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <Container fluid="md">
      <p>Cente Dashboard</p>
      <Row>
        <Col>
          <h2>Cente Dashboard</h2>
        </Col>
        <Col>
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
          />
        </Col>
      </Row>
      <AppLineChart/>
      <StudentCenterInfo/>
      <ClassList/>
    </Container>
    
  );
}

export default HomePage;