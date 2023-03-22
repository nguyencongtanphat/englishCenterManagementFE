import React from "react";
import AppCircleChart from "../../../globalComponents/CirlceChart";
import { Container, Row, Col, Card } from "react-bootstrap";
import ListStudentView from "./ListView";

function StudentCenterInfo() {
  return (
    <Container className="mt-5">
      <Row>
        <Col xs={5}>
          <Card className="p-6">
            <h3>Classify</h3>
            <AppCircleChart />
          </Card>
        </Col>
        <Col>
          <h3>Top students view</h3>
          <ListStudentView />
        </Col>
      </Row>
    </Container>
  );
}

export default StudentCenterInfo;
