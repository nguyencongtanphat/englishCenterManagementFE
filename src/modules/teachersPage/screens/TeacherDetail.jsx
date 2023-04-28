import { React, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Container, Col, Row, Image } from "react-bootstrap";
import styled from "./style.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ClassList from "../components/ClassList";
import { TeacherService } from "../../../service.js";

function TeacherDetail() {
  // Gọi API:
  const [teacher, setTeacher] = useState({});
  const { id } = useParams();
  console.log("StudentID: ", id);
  useEffect(() => {
    TeacherService.get(id)
      .then((res) => {
        setTeacher(res.data.ResponseResult.Result);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <>
      {/* Filter */}
      <Container>
        <Row>
          <Col className="mb-4" md={5}>
            <Link to="/teachers" style={{ textDecoration: "none" }}>
              Teacher List
            </Link>
            <small style={{ color: "#6B7280", fontWeight: "bold" }}>
              {" > "}
            </small>
            <Link to="/teachers/detail" style={{ textDecoration: "none" }}>
              Teacher Detail
            </Link>
            <h4>Teachers List</h4>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <div className={`${styled["details1"]}`}>
              <p style={{ fontSize: "20px", fontWeight: 600 }}>Information</p>
              <div className={`${styled["avt_details"]}`}>
                <Image
                  src={teacher.ImageURL}
                  roundedCircle="true"
                  width="64px"
                  height="64px"
                ></Image>
                <div className={`${styled["name_details"]}`}>
                  <label style={{ fontSize: "16px", fontWeight: "600" }}>
                    {teacher.Name}
                  </label>
                  <label style={{ color: "#6B7280" }}>
                    ID: {teacher.TeacherID}
                  </label>
                </div>
              </div>
              <div className={`${styled["alot_details"]}`}>
                <div className={`${styled["icon_label"]}`}>
                  <FontAwesomeIcon
                    icon="fa-solid fa-calendar"
                    style={{ color: "#6B7280" }}
                  />
                  <label style={{ color: "#6B7280" }}>
                    {teacher.DateOfBirth}
                  </label>
                </div>
                <div className={`${styled["icon_label"]}`}>
                  <FontAwesomeIcon
                    icon="fa-solid fa-phone"
                    style={{ color: "#6B7280" }}
                  />
                  <label style={{ color: "#6B7280" }}>
                    {teacher.PhoneNumber}
                  </label>
                </div>
                <div className={`${styled["icon_label"]}`}>
                  <FontAwesomeIcon
                    icon="fa-solid fa-envelope"
                    style={{ color: "#6B7280" }}
                  />
                  <label style={{ color: "#6B7280" }}>{teacher.Email}</label>
                </div>
                <div className={`${styled["icon_label"]}`}>
                  <FontAwesomeIcon
                    icon="fa-solid fa-graduation-cap"
                    style={{ color: "#6B7280" }}
                  />
                  <label style={{ color: "#6B7280" }}>
                    {teacher.Certificate}
                  </label>
                </div>
                <div className={`${styled["icon_label"]}`}>
                  <FontAwesomeIcon
                    icon="fa-solid fa-star"
                    style={{ color: "#6B7280" }}
                  />
                  <label style={{ color: "#6B7280" }}>9 years</label>
                </div>
              </div>
            </div>
          </Col>
          <Col md={8}>
            <ClassList></ClassList>
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default TeacherDetail;
