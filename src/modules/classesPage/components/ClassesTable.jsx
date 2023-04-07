import React from "react";
import { Col, Container, Form, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { faPlusCircle } from "@fortawesome/fontawesome-free-solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ClassesTable({ classes }) {
  return (
    <>
      <Container>
        <Row className="align-items-center">
          <Col>
            <Form className="mb-3" as={Row}>
              <Form.Group as={Col} xs="auto">
                <Form.Label>Teacher</Form.Label>
                <Form.Select name="teacher">
                  <option selected>All</option>
                  <option value="tc01">Ms.Hoa</option>
                  <option value="tc02">Mr.Hung</option>
                  <option value="tc03">Mr.Chau</option>
                </Form.Select>
              </Form.Group>
              <Form.Group as={Col} xs="auto">
                <Form.Label>Type</Form.Label>
                <Form.Select name="type">
                  <option value="type01">Toeic Reading & Listening</option>
                  <option value="type02">Toeic Writing & Speaking</option>
                  <option value="type03">IELTS</option>
                </Form.Select>
              </Form.Group>
            </Form>
          </Col>
          <Col className="d-flex justify-content-end">
            <Link
              to="/classes/addclasses"
              className="bg-primary d-flex align-items-center text-light py-1 px-3 rounded-2 text-decoration-none w-auto"
            >
              <FontAwesomeIcon icon={faPlusCircle} />
              <span className="ps-2">Add Class</span>
            </Link>
          </Col>
        </Row>
      </Container>

      <Table bordered hover>
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
                  to={_class.name}
                  className="text-decoration-none text-dark fw-semibold"
                >
                  {_class.name}
                </Link>
              </td>
              <td>{_class.teacher.name}</td>
              <td>{_class.studentQuantity}</td>
              <td>{_class.term}</td>
              <td>{_class.type.name}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default ClassesTable;
