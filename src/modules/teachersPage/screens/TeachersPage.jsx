import React from "react";
import { Container, Col, Row, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { faPlusCircle } from "@fortawesome/fontawesome-free-solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TeacherList from "../components/Teacher";

const teachers = [
  {
    id: "t01",
    name: "Nguyễn Thùy Trang",
    avatar: "https://i.imgur.com/DizC5X0.png",
    msgv: "1000",
    phone: "0999999999",
    email: "trangnt@gmail.com",
    certificate: "IETLS 8.0",
    experience: "5 years",
    class: { id: "cl01", name: "TOE500.1", type: "TOEIC" },
  },
  {
    id: "t01",
    name: "Nguyễn Thùy Trang",
    avatar: "https://i.imgur.com/s1LJioE.png",
    msgv: "1000",
    phone: "0999999999",
    email: "trangnt@gmail.com",
    certificate: "IETLS 8.0",
    experience: "5 years",
    class: { id: "cl01", name: "TOE500.1", type: "TOEIC" },
  },
  {
    id: "t01",
    name: "Nguyễn Thùy Trang",
    avatar: "https://i.imgur.com/dCH07c0.png",
    msgv: "1000",
    phone: "0999999999",
    email: "trangnt@gmail.com",
    certificate: "IETLS 8.0",
    experience: "5 years",
    class: { id: "cl01", name: "TOE500.1", type: "TOEIC" },
  },
  {
    id: "t01",
    name: "Nguyễn Thùy Trang",
    avatar: "https://i.imgur.com/dCH07c0.png",
    msgv: "1000",
    phone: "0999999999",
    email: "trangnt@gmail.com",
    certificate: "IETLS 8.0",
    experience: "5 years",
    class: { id: "cl01", name: "TOE500.1", type: "TOEIC" },
  },
  {
    id: "t01",
    name: "Nguyễn Thùy Trang",
    avatar: "https://i.imgur.com/oirOmyV.png",
    msgv: "1000",
    phone: "0999999999",
    email: "trangnt@gmail.com",
    certificate: "IETLS 8.0",
    experience: "5 years",
    class: { id: "cl01", name: "TOE500.1", type: "TOEIC" },
  },
];

function TeachersPage() {
  return (
    <>
      {/* Filter */}
      <Container>
        <Row>
          <Col className="mb-4" md={5}>
            <Link to="/teachers" style={{ textDecoration: "none" }}>
              Teacher List
            </Link>
            <h4>Teachers List</h4>
            <Form.Group className="d-flex">
              <Form.Select style={{ width: "200px", marginRight: "30px" }}>
                <option>Certificate:</option>
                <option>TOEIC</option>
                <option>IELTS</option>
              </Form.Select>

              <Form.Select>
                <option>Type Teaching Class:</option>
                <option>TOEIC500</option>
                <option>IELTS5.</option>
              </Form.Select>
            </Form.Group>
          </Col>

          {/* Add teacher: */}
          <Col className="text-end mt-4">
            <Button variant="primary">
              <FontAwesomeIcon icon={faPlusCircle} />
              Add Teacher
            </Button>{" "}
          </Col>
        </Row>
        <Row>
          <TeacherList teachers={teachers} />
        </Row>
      </Container>
      {/* Teachers table */}
    </>
  );
}
export default TeachersPage;
