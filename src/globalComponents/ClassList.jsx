import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap';
import ClassCard from './ClassCard';

function ClassList() {
    const classes = [
      {
        id: "1",
        className: "TOE500.1",
        teacher: "Mrs.Hoa",
        number: 45,
        target: "500+",
        time: "Jan 2nd - Jul 30th",
      },
      {
        id: "2",
        className: "TOE500.1",
        teacher: "Mrs.Hoa",
        number: 45,
        target: "500+",
        time: "Jan 2nd - Jul 30th",
      },
      {
        className: "TOE500.1",
        teacher: "Mrs.Hoa",
        number: 45,
        target: "500+",
        time: "Jan 2nd - Jul 30th",
      },
      {
        id: "3",
        className: "TOE500.1",
        teacher: "Mrs.Hoa",
        number: 45,
        target: "500+",
        time: "Jan 2nd - Jul 30th",
      },
      {
        id: "4",
        className: "TOE500.1",
        teacher: "Mrs.Hoa",
        number: 45,
        target: "500+",
        time: "Jan 2nd - Jul 30th",
      },
      {
        id: "5",
        className: "TOE500.1",
        teacher: "Mrs.Hoa",
        number: 45,
        target: "500+",
        time: "Jan 2nd - Jul 30th",
      },
      {
        id: "6",
        className: "TOE500.1",
        teacher: "Mrs.Hoa",
        number: 45,
        target: "500+",
        time: "Jan 2nd - Jul 30th",
      },
      {
        id: "7",
        className: "TOE500.1",
        teacher: "Mrs.Hoa",
        number: 45,
        target: "500+",
        time: "Jan 2nd - Jul 30th",
      },
    ];
  return (
    <Card className="mt-2 p-2">
      <Container>
        <h3>Class List</h3>
        <Row>
          {classes.map((classInfo) => (
            <Col>
              <ClassCard classInfo={classInfo} />
            </Col>
          ))}
        </Row>
      </Container>
    </Card>
  );
}

export default ClassList