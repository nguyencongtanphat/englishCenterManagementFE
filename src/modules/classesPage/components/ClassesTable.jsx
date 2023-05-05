import React, { useState, useEffect } from "react";
import { Col, Container, Form, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { faPlusCircle } from "@fortawesome/fontawesome-free-solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "../../studentsPage/components/styleStd.module.css"
import deleteSVG from "../../../assets/images/global/delete.svg";
import editSVG from "../../../assets/images/global/edit.svg";
import axios from 'axios';

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
  
  return (
    <div>
      <Container>
        <Row className="align-items-center">
          <Col style={{fontSize:"14px"}}>
            <Form className="mb-3" as={Row}>
              <Form.Group as={Col} xs="auto">
                <Form.Select name="teacher" style={{ fontSize: "14px" }}>
                  <option hidden>Teacher</option>
                  <option value="tc01">TOEIC</option>
                  <option value="tc02">IETLS</option>
                  <option value="tc03">TOEFL</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} xs="auto">
                <Form.Select name="type" style={{ fontSize: "14px" }}>
                  <option hidden>Type</option>
                  <option value="tc01">TOEIC Reading & Listening</option>
                  <option value="tc02">TOEIC Writing & Speaking</option>
                  <option value="tc03">IETLS</option>
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
            <th>Type ID</th>
          </tr>
        </thead>
        <tbody>
          {classes.map((_class) => (
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
              {/* <td>{_class.teacher.Name}</td>
              <td>{_class.studentQuantity}</td> */}
              <td>{_class.TeacherName}</td>
              <td>35</td>
              <td>
              <td>
                {`${formatDate(_class.TermFrom)} - ${formatDate(_class.TermTo)}`}
              </td>
              </td>
              <td>{_class.Type}</td>
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
