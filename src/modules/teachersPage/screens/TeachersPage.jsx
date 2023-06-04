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
  const [classes, setClasses] = useState([]);
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
const [selectedTeacherId, setSelectedTeacherId] = useState("");
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
  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const response = await axios.get("http://localhost:3001/api/v1/class/td", {
          params: { teacherId: selectedTeacherId },
        });
        const classList = response.data.ResponseResult.Result;
        setClasses(classList);
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchClasses();
  }, [selectedTeacherId]);
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
  const fetchClassNames = async (classIds) => {
    try {
      const response = await axios.get("http://localhost:3001/api/v1/class", {
        params: { classIds },
      });

      const classList = response.data.ResponseResult.Result;
      return classList.map((classItem) => classItem.name);
    } catch (error) {
      console.error(error);
      return [];
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
                  <option hidden>Expertise</option>
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
                <th>EXPERTISE</th>
                <th>EXPERIENCE</th>
                <th>CLASS</th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              {teachers.map((teacher) => (
                <tr key={teacher.id}>
                  <td onClick={() => {navigate(`/teachers/${teacher._id}`);}} className="d-flex" style={{ cursor: 'pointer' }}>
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
                    {teacher.Certificate} {teacher.Score}
                  </td>
                  <td>{calculateExperience(teacher.StartedDate)}</td>
                  <td>
                      {Array.isArray(teacher.classes) && teacher.classes.length > 0 ? (
                      teacher.classes.map((classItem) => (
                        <div key={classItem._id}>{classItem.name}</div>
                      ))
                    ) : (
                      <div>No classes</div>
                    )}
                 </td>
                  {/* {teacher.classIds.join(", ")} */}
                  <td>
                  {/* <button><img src={deleteSVG} alt="delete" onClick={(e) => deleteHandler(teacher._id)} /></button> */}
                  <button onClick={(e) => deleteHandler(teacher._id)}>
                  <img src={deleteSVG} alt="delete" />
                </button>
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
