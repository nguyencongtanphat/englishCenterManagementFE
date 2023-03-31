import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import DatePicker from 'react-datepicker';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from "react-bootstrap";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ClassesAdd(){
    const [selectedDate1, setSelectedDate1]= useState(new Date());
    const [selectedDate2, setSelectedDate2]= useState(new Date());
    
    return(
        <>
            {/* <Stack direction="horizontal" gap={2}>
                <Link  style={{color:"black", textDecoration:"none"}} to="/classes">Classlist</Link>{">"}
                <Link  style={{color:"black", textDecoration:"none"}} to="/classes/addclasses">New Class</Link>
            </Stack> */}
            {/* <h2>New Class</h2> */}
            <Form style={{maxWidth:'900px'}}>
                <Row className="mb-3">
                    <Col>
                        <Form.Group controlId="formGridName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Name" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="formGridTeacher">
                            <Form.Label>Teacher</Form.Label>
                            <Form.Select defaultValue="Choose...">
                                <option value="tc01">Ms.Hoa</option>
                                <option value="tc02">Mr.Hung</option>
                                <option value="tc03">Mr.Chau</option>
                                <option>...</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>
                </Row>

                <Row>
                    <span style={{marginBottom:'8px'}}>Term</span>
                    <Col sm={3} >
                        <Form.Group className="mb-3" controlId="formGridTerm1">
                            <DatePicker
                                showIcon
                                selected={selectedDate1}
                                onChange={(date) => setSelectedDate1(date)}
                                className="black-border"
                            />
                        </Form.Group>
                    </Col>
                    <Col sm={1}> 
                         <FontAwesomeIcon icon={faArrowRight} />
                    </Col>
                    <Col sm='auto'>
                        <Form.Group className="mb-3" controlId="formGridTerm2">
                            <DatePicker
                                showIcon
                                selected={selectedDate2}
                                onChange={(date) => setSelectedDate2(date)}
                                className="black-border"
                            />
                        </Form.Group>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Form.Group controlId="formGridType">
                            <Form.Label>Type</Form.Label>
                                <Form.Select defaultValue="Type" placeholder="Type">
                                    <option value="type01">Toeic Reading & Listening</option>
                                    <option value="type02">Toeic Writing & Speaking</option>
                                    <option value="type03">IELTS</option>
                                </Form.Select>
                            </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="formGridScoreRequired">
                            <Form.Label>Score required</Form.Label>
                            <Form.Control type="number" min="0" placeholder="Score required" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="formGridScoreTarget">
                            <Form.Label>ScoreTarget</Form.Label>
                            <Form.Control type="number" min="0" placeholder="Score Target" />
                         </Form.Group>
                    </Col>
                </Row>

                <Row>
                    <Col className="text-end">
                        <Button     
                            style={{marginTop:'10px'}}
                            variant="dark" >
                            <span>Save</span>
                        </Button>
                    </Col>
                </Row>
            </Form>
        </>
    );
}

export default ClassesAdd