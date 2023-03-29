import React, { useState } from "react";
import Stack from 'react-bootstrap/Stack';
import { Link } from 'react-router-dom'
import { Button } from "react-bootstrap";
import styled from "../components/NewStudentStyle.module.css"
import { Col, Form, Row, Image} from 'react-bootstrap'

function ClassesAdd(){
    
    return(
        <div className="mx-3" style={{fontSize: "14px"}}>
            <Stack direction="horizontal" gap={2} className="mt-3">
                <Link  style={{color:"black", textDecoration:"none"}} to="/students"><small>Student List</small></Link>{">"}
                <Link  style={{color:"black", textDecoration:"none"}} to="/newstudent"><small>New Student</small></Link>
            </Stack>
            <h3 className="mb-3"><b>New Student</b></h3>
            <div className={`${styled['form']}`}>
                <Form className={`${styled['inside']}`}>
                    <Row>
                        <Col>
                            <Row className="mb-1"><lable style={{fontWeight:"500"}}>Avatar</lable></Row>
                            <Row>
                                <div className={`${styled['avt']}`}>
                                    <Image src="https://i.imgur.com/1baFFao.png" roundedCircle="true" width="48px" height="48px"></Image>
                                    <Form.Group controlId="formFileSm">
                                        <Form.Control type="file" size="sm" style={{fontSize: "14px", color: "#6B7280"}}/>
                                    </Form.Group>
                                </div>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <div className={`${styled['name']}`}>
                            <Form.Group controlId="formGridName" style={{width: "504px"}}>
                                <Form.Label style={{fontWeight:"500"}}>First name</Form.Label>
                                <Form.Control type="text" placeholder="First name" style={{fontSize: "14px", marginTop:"-4px"}}/>
                            </Form.Group>
                            <Form.Group controlId="formGridName" className="w-100">
                                <Form.Label style={{fontWeight:"500"}}>Last name</Form.Label>
                                <Form.Control type="text" placeholder="Last name" style={{fontSize: "14px", marginTop:"-4px"}}/>
                            </Form.Group>
                        </div>
                    </Row>
                    <Row>
                        <Form.Group controlId="formGridName" style={{width: "732px"}}>
                            <Form.Label style={{fontWeight:"500"}}>Email</Form.Label>
                            <Form.Control type="email" placeholder="Email" style={{fontSize: "14px", marginTop:"-4px"}}/>
                        </Form.Group>
                    </Row>
                    <Row>
                        <div className={`${styled['name']}`}>
                            <Form.Group controlId="formGridName" style={{width: "300px"}}>
                                <Form.Label style={{fontWeight:"500"}}>Date of birth</Form.Label>
                                <Form.Control type="date" value="01/01/2023" style={{fontSize: "14px", marginTop:"-4px"}}/>
                            </Form.Group>
                            <Form.Group controlId="formGridName" style={{width: "384px"}}>
                                <Form.Label style={{fontWeight:"500"}}>Phone number</Form.Label>
                                <Form.Control type="tel" placeholder="Phone number" style={{fontSize: "14px", marginTop:"-4px"}}/>
                            </Form.Group>
                        </div>
                    </Row>
                    
                    <Row>
                        <Col>
                            <Form.Group controlId="formGridType" style={{width: "300px"}}>
                                <Form.Label style={{fontWeight:"500"}}>Type class</Form.Label>
                                    <Form.Select defaultValue="Type" placeholder="Type" style={{fontSize: "14px", marginTop:"-4px"}}>
                                        <option value="type01">Toeic Reading & Listening</option>
                                        <option value="type02">Toeic Writing & Speaking</option>
                                        <option value="type03">IELTS</option>
                                    </Form.Select>
                                </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="formGridScoreRequired">
                                <Form.Label style={{fontWeight:"500"}}>Score income</Form.Label>
                                <Form.Control type="number" min="0" placeholder="Score required" style={{fontSize: "14px", marginTop:"-4px"}}/>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="formGridScoreTarget">
                                <Form.Label style={{fontWeight:"500"}}>Score desire</Form.Label>
                                <Form.Control type="number" min="0" placeholder="Score Target" style={{fontSize: "14px", marginTop:"-4px"}}/>
                            </Form.Group>
                        </Col>
                    </Row>
                </Form>
                <div className={`${styled['div_save']}`}>
                        <Button     
                            style={{fontSize: "14px", fontWeight: "bold", paddingInline: "16px"}}
                            variant="dark" >
                            <span>Save</span>
                        </Button>
                </div>
            </div>
        </div>
    );
}

export default ClassesAdd