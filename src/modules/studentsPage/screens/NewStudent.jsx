import React, { useState, useEffect } from 'react';
import Stack from 'react-bootstrap/Stack';
import { Link } from 'react-router-dom'
import { Button } from "react-bootstrap";
import styled from "../components/styleStd.module.css"
import { Col, Form, Row, Image, Modal} from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/fontawesome-free-solid";
import BreadCrumbs from "../../classesPage/components/BreadCrumbs";
import { useRef } from "react";
import StudentService from "../../../service.js";
import axios from "axios";
import { ref, uploadBytes, getDownloadURL, listAll } from "firebase/storage"
import { storage } from "../../../firebase";
import { useNavigate } from 'react-router-dom';

function ClassesAdd(){
    const navigate = useNavigate();
    const firstName = useRef("");
    const lastName = useRef("");
    const email = useRef("");
    const phoneNumber = useRef("");
    const dob = useRef("");
    const scoreIncome = useRef("");
    const scoreDesire = useRef("");
    const classType = useRef("");
    const [imageUpload, setImageUpload] = useState(null);
    const [show, setShow] = useState(false);
    const [classList, setClassList] = useState([]);
    const [choosenClass, setChoosenClass] = useState();
    const [studentIn, setStudentIn] = useState([]);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    var radios = document.getElementsByName('group');
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

    const sleep = async (milliseconds) => {
        await new Promise(resolve => {
            return setTimeout(resolve, milliseconds)
        });
    };
    
    
    const saveHandler = async () => {
        const id = "STD" + Math.floor(Math.random() * 10) + Math.floor(Math.random() * 10) + Math.floor(Math.random() * 10) + Math.floor(Math.random() * 10);
        uploadImage();
        try {
            const studentInfo = {
                StudentID: id,
                FirstName: firstName.current.value,
                LastName: lastName.current.value,
                Email: email.current.value,
                ScoreDesire: scoreDesire.current.value,
                ScoreIncome: scoreIncome.current.value,
                TypeClass: classType.current.value,
                DateOfBirthday: dob.current.value,
                PhoneNumber: phoneNumber.current.value,
            };
            setStudentIn(studentInfo)
            console.log('Student Info: ',studentInfo);

        } catch (e) {
            console.log('Lỗi: ',e);
        }
        retrieveClasses();
    }

    const retrieveClasses = () => {
        axios.get(`http://localhost:3001/api/v1/class?classType=`+classType.current.value
        +`&scoreIncome=`+scoreIncome.current.value+`&scoreDesire=`+scoreDesire.current.value)
        .then(response => {
            console.log('Class List: ',response.data.ResponseResult.Result);
            setClassList(response.data.ResponseResult.Result);
        })
        .catch(e => {
            console.log('Error: ',e);
        });
        handleShow();
    }

    const handleAdd = async () => {
        for (var i = 0, length = radios.length; i < length; i++) {
            
            if (radios[i].checked) {
              // do whatever you want with the checked radio
              setChoosenClass(i);
          
              // only one radio can be logically checked, don't check the rest
              break;
            }
          }
        const classChosen = classList[i];
        while (url==null) {await sleep(1000);}
        console.log('Class Choosen: ',classChosen);
        const apiNewStudent = { 
            ...studentIn,
            ImageURL: url,
            ClassID: classChosen.ClassID,
            NameClass: classChosen.ClassID,
        }
        console.log('API new student: ', apiNewStudent);
        axios.post('http://localhost:3001/api/v1/students', apiNewStudent);

        alert('Tạo mới Student thành công');
        navigate('/students');
    }

    return(
        <div className="mx-3" style={{fontSize: "14px"}}>
            <Stack direction="horizontal" gap={2} className="mt-3">
                <Link key="Home" to="/" className="me-3" style={{textDecoration: "none", color: "#1B64F2", fontSize: "14px" }}>Home</Link>
                <FontAwesomeIcon
                    icon={faChevronRight}
                    className="me-3"
                    style={{ fontSize: "10px", color: "#888" }}></FontAwesomeIcon>
                <Link key="Home" to="/students" className="me-3" style={{textDecoration: "none", color: "#1B64F2", fontSize: "14px" }}>Student List</Link>
                <FontAwesomeIcon
                    icon={faChevronRight}
                    className="me-3"
                    style={{ fontSize: "10px", color: "#888" }}></FontAwesomeIcon>
                <Link key="Home" to="" className="me-3" style={{textDecoration: "none", color: "#1B64F2", fontSize: "14px" }}>New Student</Link>
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
                                <Form.Control type="text" placeholder="First name" style={{fontSize: "14px", marginTop:"-4px"}} ref={firstName}/>
                            </Form.Group>
                            <Form.Group controlId="formGridName" className="w-100">
                                <Form.Label style={{fontWeight:"500"}}>Last name</Form.Label>
                                <Form.Control type="text" placeholder="Last name" style={{fontSize: "14px", marginTop:"-4px"}} ref={lastName}/>
                            </Form.Group>
                        </div>
                    </Row>
                    <Row>
                        <Form.Group controlId="formGridName" style={{width: "732px"}}>
                            <Form.Label style={{fontWeight:"500"}}>Email</Form.Label>
                            <Form.Control type="email" placeholder="Email" style={{fontSize: "14px", marginTop:"-4px"}} ref={email}/>
                        </Form.Group>
                    </Row>
                    <Row>
                        <div className={`${styled['name']}`}>
                            <Form.Group controlId="formGridName" style={{width: "300px"}}>
                                <Form.Label style={{fontWeight:"500"}}>Date of birth</Form.Label>
                                <Form.Control type="date" style={{fontSize: "14px", marginTop:"-4px"}} ref={dob}/>
                            </Form.Group>
                            <Form.Group controlId="formGridName" style={{width: "384px"}}>
                                <Form.Label style={{fontWeight:"500"}}>Phone number</Form.Label>
                                <Form.Control type="tel" placeholder="Phone number" style={{fontSize: "14px", marginTop:"-4px"}} ref={phoneNumber}/>
                            </Form.Group>
                        </div>
                    </Row>
                    
                    <Row>
                        <Col>
                            <Form.Group controlId="formGridType" style={{width: "300px"}}>
                                <Form.Label style={{fontWeight:"500"}}>Type class</Form.Label>
                                    <Form.Select defaultValue="Type" placeholder="Type" style={{fontSize: "14px", marginTop:"-4px"}} ref={classType}>
                                        <option value="TC01">TOEIC Reading & Listening</option>
                                        <option value="TC02">TOEIC Writing & Speaking</option>
                                        <option value="TC03">IELTS</option>
                                        <option value="TC04">TOEFL</option>
                                    </Form.Select>
                                </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="formGridScoreRequired">
                                <Form.Label style={{fontWeight:"500"}}>Score income</Form.Label>
                                <Form.Control type="number" min="0" placeholder="Score income" style={{fontSize: "14px", marginTop:"-4px"}} ref={scoreIncome}/>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="formGridScoreTarget">
                                <Form.Label style={{fontWeight:"500"}}>Score desire</Form.Label>
                                <Form.Control type="number" min="0" placeholder="Score desire" style={{fontSize: "14px", marginTop:"-4px"}} ref={scoreDesire}/>
                            </Form.Group>
                        </Col>
                    </Row>
                </Form>
                <div className={`${styled['div_save']}`}>
                        <button
                            style={{fontSize: "14px", fontWeight: "bold", paddingInline: "16px", cursor: "pointer", background: "black", color: "white", padding: "9px 17px",
                        borderRadius:"6px"}}
                            onClick={saveHandler}>
                            Save
                        </button>
                </div>
            </div>

            {/* Pop-up */}
            <Modal show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Body>
                    <div className={`${styled['pop-up']}`}>
                    <h3 style={{fontSize:"20px", textAlign:"center", width:"434.892px"}}>Choose Class</h3>
                    <label style={{color:"#9CA3AF", fontSize:"14px", width:"434.892px"}}>Choose <label style={{color:"#1C64F2"}}>a suitable class</label> from the list of suggested classes below:</label>

                    <div>
                        <Row>
                            <Col style={{width:"32px", marginTop:"20px"}}>
                                <Form>
                                    {classList.map((type) => (
                                        <div key={`inline-${type}`} style={{marginBottom:"44px"}}>
                                        <Form.Check
                                            inline
                                            name="group"
                                            type='radio'
                                        />
                                        </div>
                                    ))}
                                </Form>
                            </Col>
                            <Col>
                                <div>
                                    {classList.map((type) => (
                                    <div style={{display:"flex", flexDirection:"column"}}>
                                        <label style={{fontWeight:500,fontSize:"14px",marginTop:"12px"}}>{type.ClassID} - {type.TeacherName}</label>
                                        <label style={{fontWeight:400,fontSize:"14px",color:"#6B7280", marginBottom:"12px"}}>{type.ScoreTarget}+ | 12 students | 14th Sep - 15th Nov</label>
                                        <div className={`${styled['border_itemm']}`}></div>
                                    </div>    ))}
                                </div>
                            </Col>
                        </Row>
                    </div>
                    
                    <div className={`${styled['pop-up-footer']}`}>
                        <Button variant="secondary" style={{backgroundColor:"transparent", borderColor:"transparent"}} onClick={handleClose}>
                            <label style={{color: "#9CA3AF", fontSize:"14px"}}>Cancel</label>
                        </Button>
                        <button onClick={handleAdd} style={{fontSize: "14px", fontWeight: "bold", paddingInline: "16px", cursor: "pointer", background: "black", color: "white", padding: "9px 17px",
                        borderRadius:"6px"}}>
                            <label style={{fontSize:"14px", fontWeight:"bold"}}>Add</label>
                        </button>
                    </div>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default ClassesAdd