// import React, { useState } from "react";
// import Form from 'react-bootstrap/Form';
// import DatePicker from 'react-datepicker';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import { Button } from "react-bootstrap";
// import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// function ClassesAdd(){
//     const [selectedDate1, setSelectedDate1]= useState(new Date());
//     const [selectedDate2, setSelectedDate2]= useState(new Date());
    
//     return(
//         <>
//             {/* <Stack direction="horizontal" gap={2}>
//                 <Link  style={{color:"black", textDecoration:"none"}} to="/classes">Classlist</Link>{">"}
//                 <Link  style={{color:"black", textDecoration:"none"}} to="/classes/addclasses">New Class</Link>
//             </Stack> */}
//             {/* <h2>New Class</h2> */}
//             <Form style={{maxWidth:'900px'}}>
//                 <Row className="mb-3">
//                     <Col>
//                         <Form.Group controlId="formGridName">
//                             <Form.Label>Name</Form.Label>
//                             <Form.Control type="text" placeholder="Name" />
//                         </Form.Group>
//                     </Col>
//                     <Col>
//                         <Form.Group controlId="formGridTeacher">
//                             <Form.Label>Teacher</Form.Label>
//                             <Form.Select defaultValue="Choose...">
//                                 <option value="tc01">Ms.Hoa</option>
//                                 <option value="tc02">Mr.Hung</option>
//                                 <option value="tc03">Mr.Chau</option>
//                                 <option>...</option>
//                             </Form.Select>
//                         </Form.Group>
//                     </Col>
//                 </Row>

//                 <Row>
//                     <span style={{marginBottom:'8px'}}>Term</span>
//                     <Col sm={3} >
//                         <Form.Group className="mb-3" controlId="formGridTerm1">
//                             <DatePicker
//                                 showIcon
//                                 selected={selectedDate1}
//                                 onChange={(date) => setSelectedDate1(date)}
//                                 className="black-border"
//                             />
//                         </Form.Group>
//                     </Col>
//                     <Col sm={1}> 
//                          <FontAwesomeIcon icon={faArrowRight} />
//                     </Col>
//                     <Col sm='auto'>
//                         <Form.Group className="mb-3" controlId="formGridTerm2">
//                             <DatePicker
//                                 showIcon
//                                 selected={selectedDate2}
//                                 onChange={(date) => setSelectedDate2(date)}
//                                 className="black-border"
//                             />
//                         </Form.Group>
//                     </Col>
//                 </Row>

//                 <Row>
//                     <Col>
//                         <Form.Group controlId="formGridType">
//                             <Form.Label>Type</Form.Label>
//                                 <Form.Select defaultValue="Type" placeholder="Type">
//                                     <option value="type01">Toeic Reading & Listening</option>
//                                     <option value="type02">Toeic Writing & Speaking</option>
//                                     <option value="type03">IELTS</option>
//                                 </Form.Select>
//                             </Form.Group>
//                     </Col>
//                     <Col>
//                         <Form.Group controlId="formGridScoreRequired">
//                             <Form.Label>Score required</Form.Label>
//                             <Form.Control type="number" min="0" placeholder="Score required" />
//                         </Form.Group>
//                     </Col>
//                     <Col>
//                         <Form.Group controlId="formGridScoreTarget">
//                             <Form.Label>ScoreTarget</Form.Label>
//                             <Form.Control type="number" min="0" placeholder="Score Target" />
//                          </Form.Group>
//                     </Col>
//                 </Row>

//                 <Row>
//                     <Col className="text-end">
//                         <Button     
//                             style={{marginTop:'10px'}}
//                             variant="dark" >
//                             <span>Save</span>
//                         </Button>
//                     </Col>
//                 </Row>
//             </Form>
//         </>
//     );
// }

// export default ClassesAdd

import React, { useState } from "react";
import Stack from 'react-bootstrap/Stack';
import { Link } from 'react-router-dom'
import { Button } from "react-bootstrap";
import styled from "../../studentsPage/components/styleStd.module.css"
import { Col, Form, Row, Image, Modal} from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/fontawesome-free-solid";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";


function ClassesAdd(){

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <div style={{fontSize: "14px"}}>
            <div className={`${styled['form']}`} style={{height:"344px"}}>
                <Form className={`${styled['inside']}`} style={{height: "282px"}}>
                    <Row>
                        <div className={`${styled['name']}`}>
                            <Form.Group controlId="formGridName" style={{width: "384px"}}>
                                <Form.Label style={{fontWeight:"500"}}>Name</Form.Label>
                                <Form.Control type="text" placeholder="First name" style={{fontSize: "14px", marginTop:"-4px"}}/>
                            </Form.Group>
                            <Form.Group controlId="formGridType" style={{width: "300px"}}>
                                <Form.Label style={{fontWeight:"500"}}>Teacher</Form.Label>
                                    <Form.Select defaultValue="Type" placeholder="Type" style={{fontSize: "14px", marginTop:"-4px"}}>
                                        <option value="type01">Mrs. Nhi Nguyễn</option>
                                        <option value="type02">Mr. Hùng Phạm</option>
                                        <option value="type03">Mrs. Phương Hoàng</option>
                                    </Form.Select>
                                </Form.Group>
                        </div>
                    </Row>
          
                    <Row>
                        <span style={{marginBottom:'8px', fontWeight:"500"}}>Term</span>
                        <Col>
                            <Form.Group controlId="formGridName">
                                <Form.Control type="date" style={{fontSize: "14px", marginTop:"-4px", width:"300px"}}/>
                            </Form.Group>
                        </Col>
                        <Col> 
                             <FontAwesomeIcon icon={faArrowRight} style={{width: "20px", marginLeft:"18px"}}/>
                        </Col>
                        <Col>
                            <Form.Group controlId="formGridName">
                                <Form.Control type="date" style={{fontSize: "14px", marginTop:"-4px", width:"300px"}}/>
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Form.Group controlId="formGridType">
                                <Form.Label style={{fontWeight:"500"}}>Type</Form.Label>
                                    <Form.Select defaultValue="Type" placeholder="Type" style={{fontSize: "14px", marginTop:"-4px", width:"300px"}}>
                                        <option value="type01">Toeic Reading & Listening</option>
                                        <option value="type02">Toeic Writing & Speaking</option>
                                        <option value="type03">IELTS</option>
                                    </Form.Select>
                                </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="formGridScoreRequired">
                                <Form.Label style={{fontWeight:"500"}}>Score required</Form.Label>
                                <Form.Control type="number" min="0" placeholder="Score required" style={{fontSize: "14px", marginTop:"-4px"}} />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="formGridScoreTarget">
                                <Form.Label style={{fontWeight:"500"}}>Score Target</Form.Label>
                                <Form.Control type="number" min="0" placeholder="Score target" style={{fontSize: "14px", marginTop:"-4px"}}/>
                             </Form.Group>
                        </Col>
                    </Row>
                    
                </Form>
                <div className={`${styled['div_save']}`}>
                        <Button
                            style={{fontSize: "14px", fontWeight: "bold", paddingInline: "16px"}}
                            variant="dark" onClick={handleShow}>
                            Save
                        </Button>
                </div>
            </div>
        </div>
    );
}

export default ClassesAdd