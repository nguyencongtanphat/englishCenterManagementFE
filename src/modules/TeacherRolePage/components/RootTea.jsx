import React from 'react'
import { Outlet } from "react-router";
import { Container, Row, Col } from "react-bootstrap";
import HeaderTeacher from "./HeaderTeacher";
import Sidebar from "../../../globalComponents/Sidebar/Sidebar"
import SidebarTea from './SidebarTea';

const RootTea = () => {
    return (
      <Container fluid>
        {/* <Header /> */}
        <HeaderTeacher name="Nguyen Thanh Trung"/>
        <Row className='d-flex'>
          {/* <Sidebars /> */}  
          <Col xs={2} style={{borderRight: "1px solid #E5E7EB" }}>
              <SidebarTea/>
          </Col>
          <Col xs={10}>
            {/* content of web will appear here */}
              <Outlet />
          </Col>
        </Row>
      </Container>
    );
  };
  export default RootTea;