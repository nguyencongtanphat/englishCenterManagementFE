import React, { useState, useEffect } from "react";
import { Col, Container, Form, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { faPlusCircle } from "@fortawesome/fontawesome-free-solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "../../studentsPage/components/styleStd.module.css"
import deleteSVG from "../../../assets/images/global/delete.svg";
import editSVG from "../../../assets/images/global/edit.svg";
import axios from 'axios';
import StudentService from "../../../service.js";
import { useParams } from "react-router";

function ClassesTable({ classes }) {
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
  
  // Handle Delete Class
  const [classList, setClassList] = useState([]);
  const [classDeleted, setClassDeleted] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('http://localhost:3001/api/v1/class');
      setClassList(result.data);
    };
    fetchData();
  }, [classDeleted]);

  const deleteHandler = async (Id) => {
    try {
      const response = await axios.delete(`http://localhost:3001/api/v1/class/${Id}`);
      console.log(response.data.message);
      if (Array.isArray(classList)) {
        setClassList(classList.filter((cls) => cls._id !== Id));
      }
      setClassDeleted(prevState => !prevState);
      window.location.reload();
      alert('Xóa class thành công!');
    } 
    catch (error) {
      console.log(error);
      alert('Đã có lỗi xảy ra khi xóa class!');
    }
  };



  //---------handle filter Teacher and TypeClass---------------
  const [teachers, setTeachers] = useState([]);
  const [selectedTeacher, setSelectedTeacher] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [displayedClasses, setDisplayedClasses] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/v1/class/")
      .then((res) => {
        //Đoạn này để lọc danh sách các teacherName bị trùng thì chỉ hiển thị trên dropdown 1 lần
        const allTeachers = res.data.ResponseResult.Result;
        const uniqueTeachers = allTeachers.filter((teacher, index, self) =>
          index === self.findIndex((t) => t.TeacherName === teacher.TeacherName)
        );

        setTeachers(uniqueTeachers);
        setDisplayedClasses(allTeachers);
        console.log('Data result');
        console.log(res.data.ResponseResult.Result);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // hàm xử lý khi filter Teacher
  const handleTeacherChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedTeacher(selectedValue);
    if (selectedValue === "") {
      setDisplayedClasses(classes);
      return;
    }
    axios
      // .get(`http://localhost:3001/api/v1/class/?teacherName=${selectedValue}`)
      .get(
        `http://localhost:3001/api/v1/class/?teacherName=${selectedValue}&classType=${selectedType}`
      )
      .then((response) => {
        setDisplayedClasses(response.data.ResponseResult.Result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // hàm xử lý khi Filter Type
  const handleTypeChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedType(selectedValue);
    if (selectedValue === "") {
      // nếu không chọn type thì hiển thị tất cả Class
      setDisplayedClasses(classes);
      return;
    }
    axios
      // .get(`http://localhost:3001/api/v1/class/?classType=${selectedValue}`)
      .get(
        `http://localhost:3001/api/v1/class/?teacherName=${selectedTeacher}&classType=${selectedValue}`
      )
      .then((response) => {
        setDisplayedClasses(response.data.ResponseResult.Result);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  

  return (
    <div>
      <Container>
        <Row className="align-items-center">
          <Col style={{fontSize:"14px"}}>
            <Form className="mb-3" as={Row}>
              <Form.Group as={Col} xs="auto">
                <Form.Select name="teacher" style={{ fontSize: "14px" }} value={selectedTeacher} 
                  onChange={handleTeacherChange}>
                  <option hidden>Select a Teacher</option>
                  {teachers.map((teacher) => (
                    <option key={teacher.id} value={teacher.id}>
                      {teacher.TeacherName}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
              <Form.Group as={Col} xs="auto">
                <Form.Select name="type" style={{ fontSize: "14px" }} value={selectedType} onChange={handleTypeChange}>
                  <option hidden>Type</option>
                  <option value="TC01">TOEIC Reading & Listening</option>
                  <option value="TC02">TOEIC Writing & Speaking</option>
                  <option value="TC03">IETLS</option>
                  <option value="TC04">TOEFL</option>
                </Form.Select>
              </Form.Group>
            </Form>
          </Col>
          <Col className="d-flex justify-content-end">
          <Link to='add' className='bg-primary text-light py-1 px-3 rounded-2 text-decoration-none' style={{alignItems: "center"}}>
                        <FontAwesomeIcon icon={faPlusCircle}/>
                        <span className='ps-2' style={{fontSize: "14px"}}>Add Class</span>
          </Link>
          </Col>
        </Row>
      </Container>
      <div className={`${styled["form"]}`}>
      <Table bordered
          hover
          style={{
            fontSize: 14,
            borderCollapse: "collapse",
            borderRadius: "1em",
            overflow: "hidden",
            borderColor: "#E5E7EB",
            backgroundColor: "white"
          }}>
        <thead>
          <tr className="text-uppercase text-secondary">
            <th>Name</th>
            <th>Teacher</th>
            <th>Num of Student</th>
            <th>Term</th>
            <th>Type Name</th>
          </tr>
        </thead>
        <tbody>
          {displayedClasses.map((_class) => (
            <tr key={_class._id}>
              <td>
                <Link
                  to={_class.ClassID + '/dashboard'}
                  className="text-decoration-none text-dark fw-semibold"
                >
                  {_class.ClassID} <br/>
                  <span style={{fontSize:'12px',color:'#555'}}>{_class.Name}</span>
                </Link>
              </td>
              <td>{_class.TeacherName}</td>
              <td>{_class.NumberOfStudent}</td>
              <td>
              <td>
                {`${formatDate(_class.TermFrom)} - ${formatDate(_class.TermTo)}`}
              </td>
              </td>
              <td>
                {(() => {
                  switch (_class.Type) {
                    case "TC01":
                      return "TOEIC Reading & Listening";
                    case "TC02":
                      return "TOEIC Writing & Speaking";
                    case "TC03":
                      return "IELTS";
                    case "TC04":
                      return "TOEFL";
                    default:
                      return _class.Type;
                  }
                })()}
              </td>
              <td>
                  <button><img src={editSVG} alt="edit"/></button>
                  <br></br>
                  <button><img src={deleteSVG} alt="delete" onClick={(e) => deleteHandler(_class._id)} /></button>
                </td>
            </tr>
          ))}
        </tbody>
      </Table>
      </div>
    </div>
  );
}

export default ClassesTable;
