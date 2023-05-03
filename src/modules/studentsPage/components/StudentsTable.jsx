import React, { useState, useEffect } from "react";
import {
  Col,
  Form,
  Row,
  Table,
  Container,
  Badge,
  Image,
  Dropdown,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import styled from "./styleStd.module.css";
import deleteSVG from "../../../assets/images/global/delete.svg";
import editSVG from "../../../assets/images/global/edit.svg";
import axios from 'axios';

function mathRound(number){
  return Math.round((number) * 100)/100
}

function StudentsTable({ std }) {
  let navigate = useNavigate();
  
  // Handle Delete Student
  const [studentList, setStudentList] = useState([]);
  const [studentDeleted, setStudentDeleted] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('http://localhost:3001/api/v1/students');
      setStudentList(result.data);
    };
    fetchData();
  }, [studentDeleted]);

  const deleteHandler = async (Id) => {
    try {
      const response = await axios.delete(`http://localhost:3001/api/v1/students/${Id}`);
      console.log(response.data.message);
      if (Array.isArray(studentList)) {
        setStudentList(studentList.filter((stdd) => stdd._id !== Id));
      }
      setStudentDeleted(prevState => !prevState);
      window.location.reload();
      alert('Xóa học viên thành công!');
    } 
    catch (error) {
      console.log(error);
      alert('Đã có lỗi xảy ra khi xóa học viên!');
    }
  };

  // Handle Filter by Type Class
  const [active, setActive] = useState(false);
  const stdFilter = std;
  const onChange = (event) => {
    const value = event.target.value;
    if (value == "TC00") {
      setActive(false);
    }
    else if (value == "TC01" || value == "TC02" || value == "TC03" || value == "TC04"){
      setActive(true);
    }
  };

  return (
    <>
      <Form className="mb-3" style={{ fontSize: 14 }}>
        <Row>
          <Form.Group as={Col} xs="auto">
            <Form.Select name="class" style={{ fontSize: "14px", borderColor: active ? "black" : "none"}} onChange={onChange}>
              <option value="TC00" hidden>Class Type</option>
              <option value="TC01">TOEIC Reading & Listening</option>
              <option value="TC02">TOEIC Speaking & Writing</option>
              <option value="TC03">IETLS</option>
              <option value="TC04">TOEFL</option>
            </Form.Select>
          </Form.Group>
          <Form.Group as={Col} xs="auto">
            <Form.Select name="type" style={{ fontSize: "14px" }}>
              <option hidden>Evaluation</option>
              <option value="Eva01">Good</option>
              <option value="Eva02">Medium</option>
              <option value="Eva03">Not-good</option>
              <option value="Eva03">Non</option>
            </Form.Select>
          </Form.Group>
          {/* <Form.Group as={Col} xs="auto">
            <Form.Select
              name="type"
              style={{ fontSize: "14px", borderColor: "black" }}
            >
              <option value="type01">Date</option>
              <option selected>Month: November</option>
            </Form.Select>
          </Form.Group> */}
        </Row>
      </Form>
      <div className={`${styled["form"]}`}>
        <Table
          bordered
          hover
          style={{
            fontSize: 14,
            borderCollapse: "collapse",
            borderRadius: "1em",
            overflow: "hidden",
            borderColor: "#E5E7EB",
          }}
        >
          <thead>
            <tr
              className="text-uppercase text-secondary"
              style={{ backgroundColor: "#F9FAFB" }}
            >
              <th>Name</th>
              <th>Class</th>
              <th>Phone</th>
              <th>Attendant</th>
              <th>Periodic Tests</th>
              <th>Homework</th>
              <th>Evaluation</th>
              <th></th>
            </tr>
          </thead>
          <tbody style={{ backgroundColor: "white" }}>
            {std.map((_std) => (
              <tr key={_std.id}>
                <td onClick={()=>{navigate(`/students/${_std.Student._id}`);}}>
                  <Container>
                    <Row>
                      <Col md="auto">
                        <Image
                          src={_std.Student.ImageURL}
                          roundedCircle="true"
                          width="40px"
                          height="40px"
                        ></Image>
                      </Col>
                      <Col>
                        <b>{_std.Student.Name}</b>
                        <br />
                        <label style={{ color: "#6B7280" }}>{_std.Student.StudentID}</label>
                      </Col>
                    </Row>
                  </Container>
                </td>

                <td style={{ width: "100px", backgroundColor: "white" }}>
                  {_std.Student.NameClass}
                </td>
                <td>{_std.Student.PhoneNumber}</td>
                <td>
                  { _std.TotalResult.TotalReport !== 0 ? mathRound((parseFloat((_std.TotalResult.TotalAttented / _std.TotalResult.TotalReport)) * 100)).toString() : "0"}%<br />
                  <label style={{ color: "#6B7280" }}>Present: {_std.TotalResult.TotalAttented}/{_std.TotalResult.TotalReport}</label>
                </td>
                <td>
                  { _std.TotalResult.TotalTestScoreRequired !== 0 ? mathRound((parseFloat((_std.TotalResult.TotalTestScore / _std.TotalResult.TotalTestScoreRequired)) * 100)).toString() : "0"}%<br />
                  <label style={{ color: "#6B7280" }}>Score: {_std.TotalResult.TotalTestScore}/{_std.TotalResult.TotalTestScoreRequired}</label>
                </td>
                <td>
                { _std.TotalResult.TotalHomeworkScoreRequired !== 0 ? mathRound((parseFloat((_std.TotalResult.TotalHomeworkScore / _std.TotalResult.TotalHomeworkScoreRequired)) * 100)).toString() : "0"}%<br />
                  <label style={{ color: "#6B7280" }}>Score: {_std.TotalResult.TotalHomeworkScore}/{_std.TotalResult.TotalHomeworkScoreRequired}</label>
                </td>
                <td>
                  <h6>
                    {_std.TotalResult.Evaluation === "Good" &&
                      <Badge pill bg="success">
                        {_std.TotalResult.Evaluation}
                      </Badge>
                    }
                    {_std.TotalResult.Evaluation === "Medium" &&
                      <Badge pill bg="warning">
                        {_std.TotalResult.Evaluation}
                      </Badge>
                    }
                    {_std.TotalResult.Evaluation === "Not-Good" &&
                      <Badge pill bg="danger">
                        {_std.TotalResult.Evaluation}
                      </Badge>
                    }
                    {_std.TotalResult.Evaluation === "Non" &&
                      <Badge pill bg="secondary">
                        {_std.TotalResult.Evaluation}
                      </Badge>
                    }
                  </h6>
                </td>
                <td>
                  <button><img src={editSVG} alt="edit"/></button>
                  <br></br>
                  <button><img src={deleteSVG} alt="delete" onClick={(e) => deleteHandler(_std.Student._id)} /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default StudentsTable;
