import React from "react";
import AppCircleChart from "../../../globalComponents/CirlceChart";
import { Container, Row, Col, Card } from "react-bootstrap";
import ListStudentView from "./ListView";
import AppCard from "../../../globalComponents/Card";

function StudentCenterInfo() {
  return (
    <div className="my-3">
      <Row >
        <Col xs={5}>
          <AppCard className="p-6 h-full">
            <p style={{fontWeight:700, fontSize:"20px"}}>Classify</p>
            <AppCircleChart />
          </AppCard>
        </Col>
        <Col>
          <AppCard className="p-6">
            {" "}
            <p style={{fontWeight:700, fontSize:"20px"}}>Top students</p>
            <ListStudentView />
          </AppCard>
        </Col>
      </Row>
    </div>
  );
}

export default StudentCenterInfo;
