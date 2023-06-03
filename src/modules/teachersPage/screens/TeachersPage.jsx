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
import moment from "moment";
import axios from "axios";

function calculateExperience(startDate) {
  const today = moment();
  const start = moment(startDate);
  const yearsOfExperience = today.diff(start, "years");
  return yearsOfExperience;
}

function TeachersPage() {
  let navigate = useNavigate();
  // Gọi API:
  const [teachers, setTeachers] = useState([]);
  // useEffect(() => {
  //   TeacherService.getAll()
  //     .then((res) => {
  //       setTeachers(res.data.ResponseResult.Result);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  //Bộ lọc:
  const [selectedCertificate, setSelectedCertificate] = useState("");

  const handleCertificateChange = (event) => {
    setSelectedCertificate(event.target.value);
  };
  useEffect(() => {
    fetchTeachers();
  }, [selectedCertificate]);
  const fetchTeachers = async () => {
    try {
      // Gọi API từ backend để lấy danh sách giáo viên
      const response = await axios.get("http://localhost:3001/api/v1/teacher", {
        params: { Certificate: selectedCertificate }, // Truyền giá trị đã chọn làm tham số cho API
      });

      // Lấy danh sách giáo viên từ kết quả API
      const teacherList = response.data.ResponseResult.Result;

      // Cập nhật state với danh sách giáo viên
      setTeachers(teacherList);
    } catch (error) {
      // Xử lý lỗi nếu có
      console.error(error);
    }
  };

  //search teachers:
  // const [searchValue, setSearchValue] = useState("");

  // //Search handle
  // const handleSearchChange = (event) => {
  //   const value = event.target.value;
  //   setSearchValue(value);

  //   find(value, ["TeacherName", "ClassID"]);
  // };

  // const find = (query) => {
  //   const params = new URLSearchParams();
  //   params.append("query", query);

  //   axios
  //     .get(`http://localhost:3001/api/v1/teacher/search?${params}`)
  //     .then((response) => {
  //       setTeachers(response.data.ResponseResult.Result);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

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
              <Col xs="auto">
                <Form.Group as={Col} xs="auto">
                  <Form.Select
                    name="Certificate"
                    style={{ fontSize: "14px", cursor: "pointer" }}
                    value={selectedCertificate}
                    onChange={handleCertificateChange}
                  >
                    <option hidden>Expertise</option>
                    <option value="TOEIC">TOEIC</option>
                    <option value="IELTS">IELTS</option>
                    <option value="TOEFL">TOEFL</option>
                  </Form.Select>
                </Form.Group>
              </Col>

              <Col xs="auto">
                <Form.Group>
                  <Form.Control
                    type="text"
                    placeholder="Search Class..."
                    style={{ fontSize: "14px" }}
                    // value={searchValue}
                    // onChange={handleSearchChange}
                  />
                </Form.Group>
              </Col>
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
        <Row style={{ cursor: "pointer" }}>
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
                <th>EXPERTISE</th>
                <th>EXPERIENCE</th>
                {/* <th>CLASS</th> */}
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
                  <td>
                    {teacher.Certificate}
                    {/* {teacher.Score} */}
                  </td>
                  <td>{calculateExperience(teacher.StartedDate)}</td>
                  {/* <td>{teacher.class}</td> */}
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
