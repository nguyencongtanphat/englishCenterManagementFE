import React, { useState } from "react";
import Stack from 'react-bootstrap/Stack';
import { Link } from 'react-router-dom';
import styled from "../components/styleStd.module.css"
import AppLineChart from "../components/LineChart"
import { Badge, Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/fontawesome-free-solid";

function ClassesAdd(){
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
                            <Image src="https://i.imgur.com/DizC5X0.png" roundedCircle="true" width="64px" height="64px"></Image>
                            <div className={`${styled['name_details']}`}>
                                <label style={{fontSize: "16px", fontWeight: "600"}}>Nguyễn Thành Trung</label>
                                <label style={{color: "#6B7280"}}>ID: 20520334</label>
                            </div>
                        </div>
                        <div className={`${styled['alot_details']}`}>
                            <div className={`${styled['icon_label']}`}>
                                <FontAwesomeIcon icon="fa-solid fa-calendar" style={{color: "#6B7280"}} />
                                <label style={{color: "#6B7280"}}>01/07/2002</label>
                            </div>
                            <div className={`${styled['icon_label']}`}>
                                <FontAwesomeIcon icon="fa-solid fa-phone" style={{color: "#6B7280"}} />
                                <label style={{color: "#6B7280"}}>0839132695</label>
                            </div>
                            <div className={`${styled['icon_label']}`}>
                                <FontAwesomeIcon icon="fa-solid fa-envelope" style={{color: "#6B7280"}} />
                                <label style={{color: "#6B7280"}}>nttrung01072002@gmail.com</label>
                            </div>
                            <div className={`${styled['icon_label']}`}>
                                <FontAwesomeIcon icon="fa-solid fa-book-open" style={{color: "#6B7280"}} />
                                <label style={{color: "#6B7280"}}>TOE500.1</label>
                            </div>
                            <div className={`${styled['score']}`}>
                                <div className={`${styled['incom']}`}>
                                    <label style={{color: "#6B7280"}}>Income</label>
                                    <label style={{color: "#6B7280", fontSize: "24px"}}>350</label>
                                </div>

                                <div>
                                    <div className={`${styled['divider']}`}></div>
                                </div>

                                <div className={`${styled['desire']}`}>
                                    <label style={{color: "#6B7280"}}>Desire</label>
                                    <label style={{color: "#6B7280", fontSize: "24px"}}>700</label>
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
                                        <label style={{fontSize: "16px", fontWeight:600, marginLeft: "4px"}}>20/20 lessions</label>
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
                                        <label style={{fontSize: "16px", fontWeight:400}}>Completed:</label>
                                        <label style={{fontSize: "16px", fontWeight:600, marginLeft: "4px"}}>24/26 HW</label>
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