import React from "react";
import { Container, Col, Row, Form, Button, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import { faPlusCircle } from "@fortawesome/fontawesome-free-solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TeacherList from "../components/Teacher";
import { faChevronRight } from "@fortawesome/fontawesome-free-solid";

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
              <Col>
                <Stack direction="horizontal" gap={2} className="mt-3">
                <Link key="Home" to="/" className="me-3" style={{textDecoration: "none", color: "#1B64F2", fontSize: "14px" }}>Home</Link>
                <FontAwesomeIcon
                    icon={faChevronRight}
                    className="me-3"
                    style={{ fontSize: "10px", color: "#888" }}></FontAwesomeIcon>
                <Link key="Home" to="" className="me-3" style={{textDecoration: "none", color: "#1B64F2", fontSize: "14px" }}>Teacher List</Link>
                </Stack>
                    <h3 className="mb-3"><b>Teacher List</b></h3>
              </Col>
            <Row>
            <Form.Group as={Col} xs="auto">
              <Form.Select name="class" style={{ fontSize: "14px" }}>
                <option hidden>Certificate</option>
                <option>TOEIC</option>
                <option>IELTS</option>
              </Form.Select>
              </Form.Group>
              <Form.Group as={Col} xs="auto">
              <Form.Select name="class" style={{ fontSize: "14px" }}>
                <option hidden>Type Teaching Class</option>
                <option>TOEIC500</option>
                <option>IELTS5.5</option>
              </Form.Select>
            </Form.Group>
            </Row>
          </Col>

          {/* Add teacher: */}
          <Col className="text-end mt-4">
            <Link to='new' className='bg-primary text-light py-2 px-3 rounded-2 text-decoration-none' style={{alignItems: "center"}}>
                        <FontAwesomeIcon icon={faPlusCircle}/>
                        <span className='ps-2' style={{fontSize: "14px"}}>Add Teacher</span>
                    </Link>
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
