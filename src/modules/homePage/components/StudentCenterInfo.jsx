import React from "react";
import AppCircleChart from "../../../globalComponents/CirlceChart";
import { Container, Row, Col, Card } from "react-bootstrap";
import ListStudentView from "./ListView";
import AppCard from "../../../globalComponents/Card";

function StudentCenterInfo() {
  return (
    <Container className="my-3">
      <Row >
        <Col xs={5}>
          <AppCard className="p-6 h-full">
            <h3>Classify</h3>
            <AppCircleChart />
          </AppCard>
        </Col>
        <Col>
          <AppCard className="p-6">
            {" "}
            <h3>Top students view</h3>
            <ListStudentView />
          </AppCard>
        </Col>
      </Row>
    </Container>
  );
}

export default StudentCenterInfo;
