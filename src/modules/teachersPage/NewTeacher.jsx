import React, { useState } from 'react';
import Stack from 'react-bootstrap/Stack';
import { Link } from 'react-router-dom';
import {Col, Form, Row, Image } from "react-bootstrap";
import styled from "./components/styleTc.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/fontawesome-free-solid";
import { useRef } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { ref, uploadBytes, getDownloadURL} from "firebase/storage"
import { storage } from "../../firebase";

function TeacherAdd(){
    const navigate = useNavigate();
    const firstNameRef = useRef("");
    const lastNameRef = useRef("");
    const emailRef = useRef("");
    const phoneNumberRef = useRef("");
    const passwordRef = useRef("");
    const dobRef = useRef("");
    const startdRef = useRef("");
    const certificateRef = useRef("");
    const scoreRef = useRef("");
    const [imageUpload, setImageUpload] = useState(null);

    const sleep = async (milliseconds) => {
        await new Promise(resolve => {
            return setTimeout(resolve, milliseconds)
        });
    };

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
        uploadImage();
        while (url==null) {await sleep(1000);}
        try {
            const teacherInfo = {
                FirstName: firstNameRef.current.value,
                LastName: lastNameRef.current.value,
                Email: emailRef.current.value,
                DateOfBirth: dobRef.current.value,
                StartedDate: startdRef.current.value,
                PhoneNumber: phoneNumberRef.current.value,
                Certificate: certificateRef.current.value,
                Score: scoreRef.current.value,
                Password: passwordRef.current.value,
            };
            console.log('Teacher Info: ',teacherInfo);
            const apiNewTeacher = { 
                ...teacherInfo,
                ImageURL: url,
            };
            console.log('API new teacher: ', apiNewTeacher);
            await axios.post('http://localhost:3001/api/v1/teacher', {
                ...apiNewTeacher,
                ImageURL: url
            });
            navigate('/teachers');
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
                            <Form.Group controlId="formGridName" style={{width: "300px"}}>
                                <Form.Label style={{fontWeight:"500"}}>First name</Form.Label>
                                <Form.Control type="text" placeholder="First name" style={{fontSize: "14px", marginTop:"-4px"}} ref={firstNameRef}/>
                            </Form.Group>
                            <Form.Group controlId="formGridName" style={{width:'300px'}}>
                                <Form.Label style={{fontWeight:"500"}}>Last name</Form.Label>
                                <Form.Control type="text" placeholder="Last name" style={{fontSize: "14px", marginTop:"-4px"}} ref={lastNameRef}/>
                            </Form.Group>
                        </div>
                    </Row>
                    <Row>
                        <div className={`${styled['name']}`}>
                            <Form.Group controlId="formGridDOB" style={{width: "210px"}}>
                                <Form.Label style={{fontWeight:"500"}}>Date of birth</Form.Label>
                                <Form.Control type="date" style={{fontSize: "14px", marginTop:"-4px"}} ref={dobRef}/>
                            </Form.Group>
                            <Form.Group controlId="formGridStartDate" style={{width: "210px"}}>
                                <Form.Label style={{fontWeight:"500"}}>Starting date</Form.Label>
                                <Form.Control type="date" style={{fontSize: "14px", marginTop:"-4px"}} ref={startdRef}/>
                            </Form.Group>
                            <Form.Group controlId="formGridPhonenumber" style={{width: "239px"}}>
                                <Form.Label style={{fontWeight:"500"}}>Phone number</Form.Label>
                                <Form.Control type="tel" placeholder="Phone number" style={{fontSize: "14px", marginTop:"-4px"}} ref={phoneNumberRef}/>
                            </Form.Group>
                        </div>
                    </Row>
                    <Row>
                        <Form.Group controlId="formGridEmail" style={{width: "222px"}}>
                            <Form.Label style={{fontWeight:"500"}}>Email</Form.Label>
                            <Form.Control type="email" placeholder="Email" style={{fontSize: "14px", marginTop:"-4px"}} ref={emailRef}/>
                        </Form.Group>
                        <Form.Group controlId="formGridPassword" style={{width: "222px"}}>
                            <Form.Label style={{fontWeight:"500"}}>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" style={{fontSize: "14px", marginTop:"-4px"}} ref={passwordRef}/>
                        </Form.Group>
                        <Form.Group controlId="formGridType" style={{width: "209px"}}>
                            <Form.Label style={{fontWeight:"500"}}>Expertise</Form.Label>
                                <Form.Select defaultValue="Expertise" placeholder="Type" style={{fontSize: "14px", marginTop:"-4px"}} ref={certificateRef}>
                                    <option value="TOEIC">TOEIC</option>
                                    <option value="IELTS">IELTS</option>
                                    <option value="TOEFL">TOEFL</option>
                                </Form.Select>
                        </Form.Group>
                    </Row>
                </Form>
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <button
                        style={{
                        display:'flex',
                        position:'absolute',
                        padding: '5px',
                        left: '667px',
                        bottom:'126px',
                        fontSize: '14px',
                        fontWeight: 'bold',
                        paddingInline: '16px',
                        color: 'white',
                        backgroundColor: 'black',
                        cursor: 'pointer',
                        borderRadius: '6px',
                        }}
                        onClick={saveHandler}
                    >
                        Save
                    </button>
                    </div>
            </div>
        </div>
    );
}

export default TeacherAdd