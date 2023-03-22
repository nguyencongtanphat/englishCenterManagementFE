import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap';
import ClassCard from './ClassCard';

function ClassList() {
    const classes = [
      {
        className: "TOE500.1",
        number: 45,
        target: "500+",
        time: "Jan 2nd - Jul 30th",
      },
      {
        className: "TOE500.1",
        number: 45,
        target: "500+",
        time: "Jan 2nd - Jul 30th",
      },
      {
        className: "TOE500.1",
        number: 45,
        target: "500+",
        time: "Jan 2nd - Jul 30th",
      },
      {
        className: "TOE500.1",
        number: 45,
        target: "500+",
        time: "Jan 2nd - Jul 30th",
      },
      {
        className: "TOE500.1",
        number: 45,
        target: "500+",
        time: "Jan 2nd - Jul 30th",
      },
      {
        className: "TOE500.1",
        number: 45,
        target: "500+",
        time: "Jan 2nd - Jul 30th",
      },
      {
        className: "TOE500.1",
        number: 45,
        target: "500+",
        time: "Jan 2nd - Jul 30th",
      },
      {
        className: "TOE500.1",
        number: 45,
        target: "500+",
        time: "Jan 2nd - Jul 30th",
      },
    ];
  return (
    <Card className="mt-2 p-2">
      <Container>
        <Row>
          {classes.map((classInfo) => (
            <Col>
              <ClassCard color={"Primary"} />
            </Col>
          ))}
        </Row>
      </Container>
    </Card>
  );
}

export default ClassList