import React from "react";
import { Col, Container, Form, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { faPlusCircle } from "@fortawesome/fontawesome-free-solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "../../studentsPage/components/styleStd.module.css"

function ClassesTable({ classes }) {
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
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {classes.map((_class) => (
            <tr key={_class.id}>
              <td>
                <Link
                  to={_class.Name}
                  className="text-decoration-none text-dark fw-semibold"
                >
                  {_class.Name}
                </Link>
              </td>
              {/* <td>{_class.teacher.Name}</td>
              <td>{_class.studentQuantity}</td> */}
              <td>Ms.Hoa</td>
              <td>35</td>
              <td>{_class.TermForm}</td>
              <td>{_class.Type}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      </div>
    </div>
  );
}

export default ClassesTable;
