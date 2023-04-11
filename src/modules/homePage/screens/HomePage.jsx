import { Container, Row, Col } from "react-bootstrap";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import React, { useState } from "react";
import AppLineChart from "../../../globalComponents/LineChart";
import StudentCenterInfo from "../components/StudentCenterInfo";
import ClassList from "../../../globalComponents/ClassList";
import BreadCrumbs from "../../classesPage/components/BreadCrumbs";
import Stack from 'react-bootstrap/Stack';
import { Link } from 'react-router-dom'

function HomePage() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <Container fluid="md">
      <Row>
        <Col>
          <Stack direction="horizontal" gap={2} className="mt-3">
              <Link  style={{color:"#6B7280", textDecoration:"none"}} to="/"><small>Home</small></Link>
          </Stack>
          <h3 className="mb-3"><b>Dashboard</b></h3>
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
