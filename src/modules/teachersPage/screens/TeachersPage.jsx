import React from "react";
import { useState } from "react";
import { Container, Col, Row, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { faPlusCircle } from "@fortawesome/fontawesome-free-solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Table, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function TeachersPage() {
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

  const navigate = useNavigate();
  const [selectedTeacher, setSelectedTeacher] = useState(null);

  const handleTeacherClick = (teacher) => {
    setSelectedTeacher(teacher);
    navigate(`detail`);
  };

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
          <Table
            striped
            bordered
            hover
            style={{
              fontSize: 14,
              borderCollapse: "collapse",
              borderRadius: "8px",
              overflow: "hidden",
              borderColor: "#E5E7EB",
            }}
          >
            <thead>
              <tr>
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
                  onClick={() => handleTeacherClick(teacher)}
                >
                  <td className="d-flex">
                    <Image
                      src={teacher.avatar}
                      roundedCircle="true"
                      width="40px"
                      height="40px"
                    ></Image>
                    <div style={{ marginLeft: "8px" }}>
                      <div style={{ fontWeight: "600" }}>{teacher.name}</div>
                      <div style={{ fontSize: "12px" }}>{teacher.msgv}</div>
                    </div>
                    <Link to={`/teacher/${teacher.id}`}></Link>
                  </td>
                  <td>{teacher.phone}</td>
                  <td>{teacher.email}</td>
                  <td>{teacher.certificate}</td>
                  <td>{teacher.experience}</td>
                  <td>{teacher.class.name}</td>
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