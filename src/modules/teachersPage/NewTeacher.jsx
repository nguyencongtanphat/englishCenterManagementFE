import React, { useState } from "react";
import Stack from 'react-bootstrap/Stack';
import { Link } from 'react-router-dom'
import { Button } from "react-bootstrap";
import styled from "./components/styleTc.module.css"
import { Col, Form, Row, Image, Modal} from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/fontawesome-free-solid";
import { useRef } from "react";
import axios from "axios";
import { ref, uploadBytes, getDownloadURL, listAll } from "firebase/storage"
import { storage } from "../../firebase";
function TeacherAdd(){
    const [teacherIn, setTeacherIn] = useState([]);
    const firstNameRef = useRef("");
    const lastNameRef = useRef("");
    const emailRef = useRef("");
    const phoneNumberRef = useRef("");
    const dobRef = useRef("");
    const startdRef = useRef("");
    const certificateRef = useRef("");
    const scoreRef = useRef("");
    const [imageUpload, setImageUpload] = useState(null);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [image, setImage] = useState(null);
    const [url, setUrl] = useState(null);
    const uploadImage = () => {
        const imageRef = ref(storage, `${imageUpload.name}`);
        uploadBytes(imageRef, imageUpload)
          .then(() => {
            getDownloadURL(imageRef)
              .then((url) => {
                setUrl(url);
              })
              .catch((error) => {
                console.log(error.message, "error getting the image url");
              });
            setImage(null);
          })
          .catch((error) => {
            console.log(error.message);
          });
    };
    const saveHandler = async () => {
        const id = "TC" + Math.floor(Math.random() * 10) + Math.floor(Math.random() * 10) + Math.floor(Math.random() * 10) + Math.floor(Math.random() * 10);
        uploadImage();
        try {
            const teacherInfo = {
                TeacherID: id,
                FirstName: firstNameRef.current.value,
                LastName: lastNameRef.current.value,
                Email: emailRef.current.value,
                DateOfBirth: dobRef.current.value,
                StartedDate: startdRef.current.value,
                PhoneNumber: phoneNumberRef.current.value,
                Certificate: certificateRef.current.value,
                Score: scoreRef.current.value,
            };
            setTeacherIn(teacherInfo)
            console.log('Teacher Info: ',teacherInfo);

            const response = await axios.post('http://localhost:3001/api/v1/teacher', teacherInfo);
            
            const teacherID = response.data.TeacherID;
            const apiNewTeacher = { 
                ...teacherIn,
                TeacherID: teacherID
            };
            console.log("TeacherID: ", teacherID );
            console.log('API new teacher: ', apiNewTeacher);
            axios.post('http://localhost:3001/api/v1/teacher', apiNewTeacher);
            alert('Tạo mới Teacher thành công');
        } 
        catch (e) {
            console.log('Lỗi: ', e);
            alert('Đã có lỗi xảy ra khi tạo mới Teacher');
        }
    };
    return(
        <div className="mx-3" style={{fontSize: "14px"}}>
            <Stack direction="horizontal" gap={2} className="mt-3">
                <Link key="Home" to="/" className="me-3" style={{textDecoration: "none", color: "#1B64F2", fontSize: "14px" }}>Home</Link>
                <FontAwesomeIcon
                    icon={faChevronRight}
                    className="me-3"
                    style={{ fontSize: "10px", color: "#888" }}></FontAwesomeIcon>
                <Link key="Home" to="/teachers" className="me-3" style={{textDecoration: "none", color: "#1B64F2", fontSize: "14px" }}>Teacher List</Link>
                <FontAwesomeIcon
                    icon={faChevronRight}
                    className="me-3"
                    style={{ fontSize: "10px", color: "#888" }}></FontAwesomeIcon>
                <Link key="Home" to="/" className="me-3" style={{textDecoration: "none", color: "#1B64F2", fontSize: "14px" }}>New Teacher</Link>
            </Stack>
            <h3 className="mb-3"><b>New Teacher</b></h3>
            <div className={`${styled['form']}`}>
                <Form className={`${styled['inside']}`}>
                    <Row>
                        <Col>
                            <Row className="mb-1"><lable style={{fontWeight:"500"}}>Avatar</lable></Row>
                            <Row>
                                <div className={`${styled['avt']}`}>
                                    <Image src="https://i.imgur.com/1baFFao.png" roundedCircle="true" width="48px" height="48px"></Image>
                                    <Form.Group controlId="formFileSm">
                                        <Form.Control type="file" size="sm" style={{fontSize: "14px", color: "#6B7280"}} accept=".jpg, .png"
                                            onChange={(event) => setImageUpload(event.target.files[0])}/>
                                    </Form.Group>
                                </div>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <div className={`${styled['name']}`}>
                            <Form.Group controlId="formGridName" style={{width: "504px"}}>
                                <Form.Label style={{fontWeight:"500"}}>First name</Form.Label>
                                <Form.Control type="text" placeholder="First name" style={{fontSize: "14px", marginTop:"-4px"}} ref={firstNameRef}/>
                            </Form.Group>
                            <Form.Group controlId="formGridName" className="w-100">
                                <Form.Label style={{fontWeight:"500"}}>Last name</Form.Label>
                                <Form.Control type="text" placeholder="Last name" style={{fontSize: "14px", marginTop:"-4px"}} ref={lastNameRef}/>
                            </Form.Group>
                        </div>
                    </Row>
                    <Row>
                        <div className={`${styled['name']}`}>
                            <Form.Group controlId="formGridName" style={{width: "210px"}}>
                                <Form.Label style={{fontWeight:"500"}}>Date of birth</Form.Label>
                                <Form.Control type="date" value="01/01/2023" style={{fontSize: "14px", marginTop:"-4px"}} ref={dobRef}/>
                            </Form.Group>
                            <Form.Group controlId="formGridName" style={{width: "210px"}}>
                                <Form.Label style={{fontWeight:"500"}}>Starting date</Form.Label>
                                <Form.Control type="date" value="01/01/2023" style={{fontSize: "14px", marginTop:"-4px"}} ref={startdRef}/>
                            </Form.Group>
                            <Form.Group controlId="formGridName" style={{width: "239px"}}>
                                <Form.Label style={{fontWeight:"500"}}>Phone number</Form.Label>
                                <Form.Control type="tel" placeholder="Phone number" style={{fontSize: "14px", marginTop:"-4px"}} ref={phoneNumberRef}/>
                            </Form.Group>
                        </div>
                    </Row>
                    <Row>
                        <Form.Group controlId="formGridName" style={{width: "732px"}}>
                            <Form.Label style={{fontWeight:"500"}}>Email</Form.Label>
                            <Form.Control type="email" placeholder="Email" style={{fontSize: "14px", marginTop:"-4px"}} ref={emailRef}/>
                        </Form.Group>
                    </Row>
                    
                    
                    <Row>
                        <Col>
                            <Form.Group controlId="formGridType" style={{width: "210px"}}>
                                <Form.Label style={{fontWeight:"500"}}>Certificate</Form.Label>
                                    <Form.Select defaultValue="Type" placeholder="Type" style={{fontSize: "14px", marginTop:"-4px"}} ref={certificateRef}>
                                        <option value="type01">Toeic Reading & Listening</option>
                                        <option value="type02">Toeic Writing & Speaking</option>
                                        <option value="type03">IELTS</option>
                                    </Form.Select>
                                </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="formGridScoreRequired" style={{width: "210px"}}>
                                <Form.Label style={{fontWeight:"500"}}>Score</Form.Label>
                                <Form.Control type="number" min="0" placeholder="Score income" style={{fontSize: "14px", marginTop:"-4px"}} ref={scoreRef}/>
                            </Form.Group>
                        </Col>
                    </Row>
                </Form>
                <div className={`${styled['div_save']}`}>
                        <Button
                            style={{fontSize: "14px", fontWeight: "bold", paddingInline: "16px"}}
                            variant="dark" onClick={saveHandler}>
                            Save
                        </Button>
                </div>
            </div>
        </div>
    );
}

export default TeacherAdd