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
import deleteSVG from "../../../assets/images/global/delete.svg";
import editSVG from "../../../assets/images/global/edit.svg";
import axios from 'axios';
import moment from "moment";

function calculateExperience(startDate) {
  const today = moment();
  const start = moment(startDate);
  const yearsOfExperience = today.diff(start, "years");
  return yearsOfExperience;
}

function TeachersPage({ teacher}) {
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
    TeacherService.getAll()
      .then((res) => {
        setTeachers(res.data.ResponseResult.Result);
      })
      .catch((err) => console.log(err));
  }, []);
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const monthNames = [
      'Jan', 'Feb', 'Mar',
      'Apr', 'May', 'Jun', 'Jul',
      'Aug', 'Sep', 'Oct',
      'Nov', 'Dec'
    ];
    const monthIndex = date.getMonth();
    const day = date.getDate();
    const year = date.getFullYear();
  
    return `${monthNames[monthIndex]} ${day} ${year}`;
  };
  
  // Handle Delete Teacher
  const [teacherList, setTeacherList] = useState([]);
  const [teacherDeleted, setTeacherDeleted] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('http://localhost:3001/api/v1/teacher');
      setTeacherList(result.data);
    };
    fetchData();
  }, [teacherDeleted]);

  const deleteHandler = async (Id) => {
    try {
      const response = await axios.delete(`http://localhost:3001/api/v1/teacher/${Id}`);
      console.log(response.data.message);
      if (Array.isArray(teacherList)) {
        setTeacherList(teacherList.filter((tcs) => tcs._id !== Id));
      }
      setTeacherDeleted(prevState => !prevState);
      window.location.reload();
      alert('Xóa teacher thành công!');
    } 
    catch (error) {
      console.log(error);
      alert('Đã có lỗi xảy ra khi xóa teacher!');
    }
  };
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
                <Form.Select
                  name="Certificate"
                  style={{ fontSize: "14px" }}
                  value={selectedCertificate}
                  onChange={handleCertificateChange}
                >
                  <option hidden>Certificate</option>
                  <option value="TOEIC">TOEIC</option>
                  <option value="IELTS">IELTS</option>
                  <option value="TOEFL">TOEFL</option>
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
                <th></th>
              </tr>
            </thead>

            <tbody>
              {teachers.map((_teacher) => (
                <tr
                  key={_teacher.id}
                  onClick={() => {
                    navigate(`/teachers/${_teacher._id}`);
                  }}
                >
                  <td className="d-flex">
                    <Image
                      src={_teacher.ImageURL}
                      roundedCircle="true"
                      width="40px"
                      height="40px"
                    ></Image>
                    <div style={{ marginLeft: "8px" }}>
                      <div style={{ fontWeight: "600" }}>{_teacher.Name}</div>
                      <div style={{ fontSize: "12px" }}>
                        {_teacher.TeacherID}
                      </div>
                    </div>
                  </td>
                  <td>{_teacher.PhoneNumber}</td>
                  <td>{_teacher.Email}</td>
                  <td>{_teacher.Certificate}</td>
                  <td>{_teacher.dob}</td>
                  <td></td>
                  <td>
                  <button><img src={editSVG} alt="edit"/></button>
                  <br></br>
                  <button><img src={deleteSVG} alt="delete" onClick={(e) => deleteHandler(_teacher._id)} /></button>
                </td>
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
