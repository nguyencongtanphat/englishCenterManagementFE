import React, { useState } from "react";
import Stack from 'react-bootstrap/Stack';
import { Link } from 'react-router-dom';
import styled from "../components/styleStd.module.css"
import AppLineChart from "../components/LineChart"
import { Badge, Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/fontawesome-free-solid";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import StudentService from "../../../service.js";

function ClassesAdd(){

    const [stdInfo, setStdInfo] = useState({});
    let { studentId } = useParams();
    console.log('StudentID: ',studentId);

    useEffect(() => {
        retrieveStudentDetails(studentId);
    }, []);
    
    const retrieveStudentDetails = (id) => {
        StudentService.get(id)
        .then(response => {
            console.log('Student Details: ',response.data.ResponseResult.Result);
            setStdInfo(response.data.ResponseResult.Result);
        })
        .catch(e => {
            console.log('Error: ',e);
        });
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
                <Link key="Home" to="" className="me-3" style={{textDecoration: "none", color: "#1B64F2", fontSize: "14px" }}>Student Details</Link>
            </Stack>
            <h3 className="mb-3"><b>Nguyễn Thành Trung</b></h3>
            {/* //body */}
            <div className={styled['container']}>
                {/* above */}
                <div className={`${styled['container_above']}`}>
                    <div className={`${styled['details1']}`}>
                        <p style={{fontSize: "20px", fontWeight: 600}}>Information</p>
                        <div className={`${styled['avt_details']}`}>
                            <Image src={stdInfo.ImageURL} roundedCircle="true" width="64px" height="64px"></Image>
                            <div className={`${styled['name_details']}`}>
                                <label style={{fontSize: "16px", fontWeight: "600"}}>{stdInfo.Name}</label>
                                <label style={{color: "#6B7280"}}>ID: {stdInfo.StudentID}</label>
                            </div>
                        </div>
                        <div className={`${styled['alot_details']}`}>
                            <div className={`${styled['icon_label']}`}>
                                <FontAwesomeIcon icon="fa-solid fa-calendar" style={{color: "#6B7280"}} />
                                <label style={{color: "#6B7280"}}>{stdInfo.DateOfBirthday}</label>
                            </div>
                            <div className={`${styled['icon_label']}`}>
                                <FontAwesomeIcon icon="fa-solid fa-phone" style={{color: "#6B7280"}} />
                                <label style={{color: "#6B7280"}}>{stdInfo.PhoneNumber}</label>
                            </div>
                            <div className={`${styled['icon_label']}`}>
                                <FontAwesomeIcon icon="fa-solid fa-envelope" style={{color: "#6B7280"}} />
                                <label style={{color: "#6B7280"}}>{stdInfo.Email}</label>
                            </div>
                            <div className={`${styled['icon_label']}`}>
                                <FontAwesomeIcon icon="fa-solid fa-book-open" style={{color: "#6B7280"}} />
                                <label style={{color: "#6B7280"}}>{stdInfo.NameClass}</label>
                            </div>
                            <div className={`${styled['score']}`}>
                                <div className={`${styled['incom']}`}>
                                    <label style={{color: "#6B7280"}}>Income</label>
                                    <label style={{color: "#6B7280", fontSize: "24px"}}>{stdInfo.ScoreIncome}</label>
                                </div>

                                <div>
                                    <div className={`${styled['divider']}`}></div>
                                </div>

                                <div className={`${styled['desire']}`}>
                                    <label style={{color: "#6B7280"}}>Desire</label>
                                    <label style={{color: "#6B7280", fontSize: "24px"}}>{stdInfo.ScoreDesire}</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`${styled['details2']}`}>
                        <p style={{fontSize: "20px", fontWeight: 600}}>Study Process</p>
                        <div className={`${styled['score_details']}`}>
                            <div className={`${styled['item1']}`}>
                                <div className={`${styled['detailss']}`}>
                                    <label style={{fontSize: "12px", color: "#6B7280"}}>Attendance</label>
                                    <div>
                                        <label style={{fontSize: "16px", fontWeight:400}}>Present:</label>
                                        <label style={{fontSize: "16px", fontWeight:600, marginLeft: "4px"}}>20/20 lessons</label>
                                    </div>
                                </div>
                                <div>
                                    <label style={{fontSize: "16px", fontWeight:600, marginLeft: "4px"}}>100%</label>
                                </div>
                            </div>

                            <div className={`${styled['border_item']}`}></div>

                            <div className={`${styled['item1']}`}>
                                <div className={`${styled['detailss']}`}>
                                    <label style={{fontSize: "12px", color: "#6B7280"}}>Periodic tests</label>
                                    <div>
                                        <label style={{fontSize: "16px", fontWeight:400}}>Score:</label>
                                        <label style={{fontSize: "16px", fontWeight:600, marginLeft: "4px"}}>650/700 points</label>
                                    </div>
                                </div>
                                <div>
                                    <label style={{fontSize: "16px", fontWeight:600, marginLeft: "4px"}}>98%</label>
                                </div>
                            </div>
                            
                            <div className={`${styled['border_item']}`}></div>

                            <div className={`${styled['item1']}`}>
                                <div className={`${styled['detailss']}`}>
                                    <label style={{fontSize: "12px", color: "#6B7280"}}>Homework</label>
                                    <div>
                                        <label style={{fontSize: "16px", fontWeight:400}}>Score:</label>
                                        <label style={{fontSize: "16px", fontWeight:600, marginLeft: "4px"}}>97/100 points</label>
                                    </div>
                                </div>
                                <div>
                                    <label style={{fontSize: "16px", fontWeight:600, marginLeft: "4px"}}>97%</label>
                                </div>
                            </div>

                            <div className={`${styled['final_item']}`}>
                                <label style={{width: "223px", fontSize: "16px", fontWeight:400}}>Overall:</label>
                                <label style={{color: "#238723", textAlign: "right", fontSize: "24px", fontWeight: "600"}}>98.33%</label>
                            </div>
                        </div>
                    </div>
                    <div className={`${styled['details3']}`}>
                        <p style={{fontSize: "20px", fontWeight: 600}}>Evaluation & Suggestion</p>
                        <div className={`${styled['evaluation']}`}>
                            <label style={{width: "350px", fontSize: "16px", fontWeight:400}}>Evaluation:</label>
                            <h6><Badge pill bg="success">Good</Badge></h6>
                        </div>
                        <div className={`${styled['border_bottom']}`}></div>
                        <label style={{width: "350px", fontSize: "16px", fontWeight:400}}>Suggestion:</label>
                        <div>
                            <ul style={{color: "#6B7280", lineHeight: "168%"}}>
                                <li>Should do their homework harder and more carefully.</li>
                                <li>Further improve reading skills by learning more vocabulary and grammar.</li>
                                <li>Periodic tests have done very well. Should keep it like that.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* below */}
                <div className={`${styled['container_below']}`}>
                    <p style={{fontSize: "20px", fontWeight: 600}}>Overall</p>
                    <AppLineChart style={{fontSize: "14px"}}/>
                </div>
            </div>
        </div>
    );
}

export default ClassesAdd