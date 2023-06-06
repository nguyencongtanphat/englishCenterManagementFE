import React, { useState } from 'react'
import '../../../globalComponents/Sidebar/Sidebar.css'
import CertificateIcon from '../../../globalComponents/Sidebar/SidebarIcon/CertificateIcon.jsx'
import ChartPieIcon from '../../../globalComponents/Sidebar/SidebarIcon/ChartPieIcon.jsx'
import ClassIcon from '../../../globalComponents/Sidebar/SidebarIcon/ClassIcon.jsx'
import HelpIcon from '../../../globalComponents/Sidebar/SidebarIcon/HelpIcon.jsx'
import StudentIcon from '../../../globalComponents/Sidebar/SidebarIcon/StudentIcon.jsx'
import TeacherIcon from '../../../globalComponents/Sidebar/SidebarIcon/TeacherIcon.jsx'

import SidebarFooter from '../../../globalComponents/Sidebar/SidebarFooter'
import { NavLink } from 'react-router-dom'


export default function SidebarTea() {
    const [dashboardColor, setDashboardColor] = useState("black");
    const [studentColor, setStudentColor] = useState("black");
    const [classColor, setClassColor] = useState("black");
    const [teacherColor, setTeacherColor] = useState("black");
    const [certificateColor, setCertificateColor] = useState("black");
    const [helpColor, setHelpColor] = useState("black");
    const SidebarMenu = 
    {
        "id": 1,
        "title": "Teller Operation",
        "subMenuL1": [
            {
                "id": 1,
                "title": "Dashboard",
                "icon": ChartPieIcon,
                "route": "/teacher-role"
            },
            {
                "id": 2,
                "title": "Classes",
                "icon": ClassIcon,
                "route": "/teacher-role/classes"
            },{
                "id": 3,
                "title": "Help",
                "icon": HelpIcon,
                "route": "/help"
            }
        ]
    }


    return <div className='d-flex flex-column justify-content-between sidebar-disable-copy' 
        style={{  height: '100%',
            width: "calc(100% / 6 - 20px)",
            position: "fixed",
            zIndex: "1",
            top: "70px",
            left: "5px",}}>
        
        <div>
        {
            SidebarMenu.subMenuL1.map((item, index) => {
                return (
                    <div className=''>
                        
                        <div className='row sitebar-menu-item' style={{marginTop: "8px"}}
                            key={index}
                        >
                            <NavLink to={item.route}
                                className={({ isActive }) => {
                                    if(isActive){
                                        if(item.title === "Dashboard"){
                                            setDashboardColor("#1C64F2")
                                            setStudentColor("black")
                                            setClassColor("black")
                                            setTeacherColor("black")
                                            setCertificateColor("black")
                                            setHelpColor("black")
                                        }else if(item.title=== "Students"){
                                            setStudentColor("#1C64F2")
                                            setDashboardColor("black")
                                            setClassColor("black")
                                            setTeacherColor("black")
                                            setCertificateColor("black")
                                            setHelpColor("black")
                                        }else if(item.title=== "Classes"){
                                            setClassColor("#1C64F2")
                                            setStudentColor("black")
                                            setDashboardColor("black")
                                            setTeacherColor("black")
                                            setCertificateColor("black")
                                            setHelpColor("black")
                                        }else if(item.title=== "Teachers"){
                                            setTeacherColor("#1C64F2")
                                            setStudentColor("black")
                                            setDashboardColor("black")
                                            setClassColor("black")
                                            setCertificateColor("black")
                                            setHelpColor("black")
                                        }else if(item.title=== "Certificates"){
                                            setStudentColor("black")
                                            setDashboardColor("black")
                                            setClassColor("black")
                                            setTeacherColor("black")
                                            setHelpColor("black")
                                            setCertificateColor("#1C64F2")
                                        }else if(item.title==="Help"){
                                            setHelpColor("#1C64F2")
                                            setStudentColor("black")
                                            setDashboardColor("black")
                                            setClassColor("black")
                                            setTeacherColor("black")
                                            setCertificateColor("black")
                                        }
                                    }
                                }
                                
                             }
                             style={({ isActive, isPending }) => {
                                return {
                                  color: isActive ? "#1C64F2" : "black",
                                };
                              }}
                            >
                                <div className='col-3'
                                    style={{
                                        height: "50px",
                                        position: "relative",
                                        padding: "0px",
                                        lineHeight: "50px",
                                        paddingLeft: "25px",
                                        paddingTop: "15px"
                                    }}                            
                                    
                                >   
                                    {<div>
                                        {item.title === "Dashboard" && <ChartPieIcon id="Dashboard" className="menu-icon" color={dashboardColor}/>}
                                        {item.title === "Students" && <StudentIcon id="Student" className="menu-icon" color={studentColor} />}
                                        {item.title === "Classes" && <ClassIcon id="Classes" className="menu-icon" color={classColor}/>}
                                        {item.title === "Teachers" && <TeacherIcon id="Teacher"  className="menu-icon" color={teacherColor} />}
                                        {item.title === "Certificates" && <CertificateIcon id="Certificate" className="menu-icon" color={certificateColor} />}
                                        {item.title === "Help" && <HelpIcon id="Help" className="menu-icon" color={helpColor} />}
                                    </div>}
                                    {/* <CertificateIcon color={"blue"}/>  */}
                                </div>
                                { item.title == "Dashboard" &&  classColor == "black" && <div className='hi col-9 '
                                    style={{
                                        height: "50px",
                                        paddingLeft: "5px",
                                        lineHeight: "50px",
                                        color: "#1C64F2",
                                        fontWeight: "500",
                                        fontSize: "15px",
                                        // fontFamily: ""
                                    }}
                                >
                                    <p > Dashboard </p>
                                </div> }

                                { item.title == "Dashboard" && classColor == "#1C64F2" && <div className='hi col-9 '
                                    style={{
                                        height: "50px",
                                        paddingLeft: "5px",
                                        lineHeight: "50px",
                                        color: "black",
                                        fontWeight: "500",
                                        fontSize: "15px",
                                        // fontFamily: ""
                                    }}
                                >
                                    <p > Dashboard </p>
                                </div> }

                                { item.title == "Classes" && <div className='hi col-9 '
                                    style={{
                                        height: "50px",
                                        paddingLeft: "5px",
                                        lineHeight: "50px",
                                        color: {classColor},
                                        fontWeight: "500",
                                        fontSize: "15px",
                                        // fontFamily: ""
                                    }}
                                >
                                    <p > {item.title} </p>
                                </div> }

                                { item.title == "Help" && <div className='hi col-9 '
                                    style={{
                                        height: "50px",
                                        paddingLeft: "5px",
                                        lineHeight: "50px",
                                        color: {helpColor},
                                        fontWeight: "500",
                                        fontSize: "15px",
                                        // fontFamily: ""
                                    }}
                                >
                                    <p > {item.title} </p>
                                </div> }
                                
                                </NavLink>
        
                                {item.title=="Help" && <hr style={{marginTop: "-54px"}}></hr>}
                            </div>
                            
                    </div>
                )
            })
        }
        </div>
        <SidebarFooter />
    </div>
}
