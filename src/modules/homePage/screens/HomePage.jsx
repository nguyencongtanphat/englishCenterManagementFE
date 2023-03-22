import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function HomePage() {
  return (
    <Container fluid="md">
      <h1 className="text-red-500">Cente Dashboard</h1>
      <Row>
        <Col>Cente Dashboard</Col>
        <Col>picker</Col>
      </Row>
    </Container>
  );
}

export default HomePage;
