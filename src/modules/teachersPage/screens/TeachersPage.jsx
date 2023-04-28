import React from "react";
import { useState, useEffect } from "react";
import { Container, Col, Row, Form, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import { faPlusCircle } from "@fortawesome/fontawesome-free-solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Table, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { faChevronRight } from "@fortawesome/fontawesome-free-solid";
import { TeacherService } from "../../../service.js";

function TeachersPage() {
  let navigate = useNavigate();
  // Gọi API:
  const [teachers, setTeachers] = useState([]);
  useEffect(() => {
    TeacherService.getAll()
      .then((res) => {
        setTeachers(res.data.ResponseResult.Result);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {/* Filter */}
      <Container>
        <Row>
          <Col className="mb-4" md={5}>
            <Stack direction="horizontal" gap={2} className="mt-3">
              <Link
                key="Home"
                to="/"
                className="me-3"
                style={{
                  textDecoration: "none",
                  color: "#1B64F2",
                  fontSize: "14px",
                }}
              >
                Home
              </Link>
              <FontAwesomeIcon
                icon={faChevronRight}
                className="me-3"
                style={{ fontSize: "10px", color: "#888" }}
              ></FontAwesomeIcon>
              <Link
                key="Home"
                to=""
                className="me-3"
                style={{
                  textDecoration: "none",
                  color: "#1B64F2",
                  fontSize: "14px",
                }}
              >
                Teacher List
              </Link>
            </Stack>
            <h3 className="mb-3">
              <b>Teacher List</b>
            </h3>
            <Row>
              <Form.Group as={Col} xs="auto">
                <Form.Select name="class" style={{ fontSize: "14px" }}>
                  <option hidden>Certificate:</option>
                  <option>TOEIC</option>
                  <option>IELTS</option>
                </Form.Select>
              </Form.Group>
              <Form.Group as={Col} xs="auto">
                <Form.Select name="type" style={{ fontSize: "14px" }}>
                  <option hidden>Type Teaching Class</option>
                  <option>TOEIC500</option>
                  <option>IELTS5.5</option>
                </Form.Select>
              </Form.Group>
            </Row>
          </Col>

          {/* Add teacher: */}
          <Col className="text-end" style={{ marginTop: "32px" }}>
            <Link
              to="/newteacher"
              className="bg-primary text-light py-2 px-3 rounded-2 text-decoration-none"
              style={{ alignItems: "center" }}
            >
              <FontAwesomeIcon icon={faPlusCircle} />
              <span className="ps-2" style={{ fontSize: "14px" }}>
                Add Teacher
              </span>
            </Link>
          </Col>
        </Row>
        <Row>
          <Table
            bordered
            hover
            style={{
              fontSize: 14,
              borderCollapse: "collapse",
              borderRadius: "8px",
              overflow: "hidden",
              borderColor: "#E5E7EB",
              marginLeft: "12px",
            }}
          >
            <thead>
              <tr
                className="text-uppercase text-secondary"
                style={{ backgroundColor: "#F9FAFB" }}
              >
                <th>NAME</th>
                <th>PHONE</th>
                <th>EMAIL</th>
                <th>CERTIFICATE</th>
                <th>EXPERIENCE</th>
                <th>CLASS</th>
              </tr>
            </thead>

            <tbody>
              {teachers.map((teacher) => (
                <tr
                  key={teacher.id}
                  onClick={() => {
                    navigate(`/teachers/${teacher._id}`);
                  }}
                >
                  <td className="d-flex">
                    <Image
                      src={teacher.ImageURL}
                      roundedCircle="true"
                      width="40px"
                      height="40px"
                    ></Image>
                    <div style={{ marginLeft: "8px" }}>
                      <div style={{ fontWeight: "600" }}>{teacher.Name}</div>
                      <div style={{ fontSize: "12px" }}>
                        {teacher.TeacherID}
                      </div>
                    </div>
                  </td>
                  <td>{teacher.PhoneNumber}</td>
                  <td>{teacher.Email}</td>
                  <td>{teacher.Certificate}</td>
                  <td></td>
                  <td></td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Row>
      </Container>
      {/* Teachers table */}
    </>
  );
}
export default TeachersPage;
