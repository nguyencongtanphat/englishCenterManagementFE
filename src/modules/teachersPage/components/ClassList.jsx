import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import AppCard from "./Card";
import ClassCard from "./ClassCard";

function ClassList() {
  const classes = [
    {
      id: "1",
      className: "TOE500.1",

      number: 45,
      target: "500+",
      time: "Jan 2nd - Jul 30th",
    },
    {
      id: "2",
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
      id: "3",
      className: "TOE500.1",

      number: 45,
      target: "500+",
      time: "Jan 2nd - Jul 30th",
    },
    {
      id: "4",
      className: "TOE500.1",

      number: 45,
      target: "500+",
      time: "Jan 2nd - Jul 30th",
    },
    {
      id: "5",
      className: "TOE500.1",

      number: 45,
      target: "500+",
      time: "Jan 2nd - Jul 30th",
    },
    {
      id: "6",
      className: "TOE500.1",

      number: 45,
      target: "500+",
      time: "Jan 2nd - Jul 30th",
    },
    {
      id: "7",
      className: "TOE500.1",

      number: 45,
      target: "500+",
      time: "Jan 2nd - Jul 30th",
    },
  ];
  const colorsBg = [
    "#1C64F2",
    "#BC2FB6",
    "#9B51E0",
    "#F2C94C",
    "#F2994A",
    "#1BB0A7",
    "#E83480",
    "#27AE60",
    "#2D9CDB",
  ];

  let index = 0;
  return (
    <AppCard className="">
      <Container>
        <p style={{fontSize: "20px", fontWeight: 600}}>Teaching Classes</p>
        <Row>
          {classes.map((classInfo) => {
            if (index > colorsBg.length) index = 0;
            const bgColor = colorsBg[index++];
            return (
              <Col md={4}>
                <ClassCard classInfo={classInfo} bgColor={bgColor} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </AppCard>
  );
}

export default ClassList;
