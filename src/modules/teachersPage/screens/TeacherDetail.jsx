import React from "react";
import { Link } from "react-router-dom";
import { Container, Col, Row, Image } from "react-bootstrap";
import styled from "./style.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ClassList from "../components/ClassList";

function TeacherDetail({ teachers }) {
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
                  src="https://i.imgur.com/DizC5X0.png"
                  roundedCircle="true"
                  width="64px"
                  height="64px"
                ></Image>
                <div className={`${styled["name_details"]}`}>
                  <label style={{ fontSize: "16px", fontWeight: "600" }}>
                    Nguyễn Thùy Trang
                  </label>
                  <label style={{ color: "#6B7280" }}>ID: 1000</label>
                </div>
              </div>
              <div className={`${styled["alot_details"]}`}>
                <div className={`${styled["icon_label"]}`}>
                  <FontAwesomeIcon
                    icon="fa-solid fa-calendar"
                    style={{ color: "#6B7280" }}
                  />
                  <label style={{ color: "#6B7280" }}>19/05/2002</label>
                </div>
                <div className={`${styled["icon_label"]}`}>
                  <FontAwesomeIcon
                    icon="fa-solid fa-phone"
                    style={{ color: "#6B7280" }}
                  />
                  <label style={{ color: "#6B7280" }}>0999999999</label>
                </div>
                <div className={`${styled["icon_label"]}`}>
                  <FontAwesomeIcon
                    icon="fa-solid fa-envelope"
                    style={{ color: "#6B7280" }}
                  />
                  <label style={{ color: "#6B7280" }}>trangnt@gmail.com</label>
                </div>
                <div className={`${styled["icon_label"]}`}>
                  <FontAwesomeIcon
                    icon="fa-solid fa-graduation-cap"
                    style={{ color: "#6B7280" }}
                  />
                  <label style={{ color: "#6B7280" }}>IETLS</label>
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
