
import React, { useState } from 'react'
import SidebarMenu from './SidebarMenu'
import './Sidebar.css'
import CertificateIcon from './SidebarIcon/CertificateIcon.jsx'
import ChartPieIcon from './SidebarIcon/ChartPieIcon.jsx'
import ClassIcon from './SidebarIcon/ClassIcon.jsx'
import HelpIcon from './SidebarIcon/HelpIcon.jsx'
import StudentIcon from './SidebarIcon/StudentIcon.jsx'
import TeacherIcon from './SidebarIcon/TeacherIcon.jsx'

import SidebarFooter from './SidebarFooter'


export default function Sidebar() {
    
    const [dashboardColor, setDashboardColor] = useState("black");
    const [studentColor, setStudentColor] = useState("black");
    const [classColor, setClassColor] = useState("black");
    const [teacherColor, setTeacherColor] = useState("black");
    const [certificateColor, setCertificateColor] = useState("black");
    const [helpColor, setHelpColor] = useState("black");
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
                // let icon = iconList.find((iconItem) => {
                //     if(iconItem.name === item.icon){
                //         return iconItem
                //     }
                    
                // })
                // let iconComp = icon.comp
                return (
                    <div className=''>
                        
                        <div className='row sitebar-menu-item' style={{marginTop: "8px"}}
                            key={index}
                            onMouseEnter={ () => {
                                if(item.title === "Dashboard"){
                                    setDashboardColor("#1C64F2")
                                }else if(item.title=== "Student"){
                                    setStudentColor("#1C64F2")
                                }else if(item.title=== "Classes"){
                                    setClassColor("#1C64F2")
                                }else if(item.title=== "Teacher"){
                                    setTeacherColor("#1C64F2")
                                }else if(item.title=== "Certificate"){
                                    setCertificateColor("#1C64F2")
                                }else if(item.title==="Help"){
                                    setHelpColor("#1C64F2")
                                }


                             } }
                            onMouseLeave={ () => {
                                if(item.title === "Dashboard"){
                                    setDashboardColor("#000000")
                                }else if(item.title=== "Student"){
                                    setStudentColor("#000000")
                                }else if(item.title=== "Classes"){
                                    setClassColor("#000000")
                                }else if(item.title=== "Teacher"){
                                    setTeacherColor("#000000")
                                }else if(item.title=== "Certificate"){
                                    setCertificateColor("#000000")
                                }else if(item.title==="Help"){
                                    setHelpColor("#000000")
                                }
                            } }
                        >
                            <a href={item.route} >
                                <div className='col-3'
                                    style={{
                                        height: "32px",
                                        position: "relative",
                                        padding: "0px",
                                        lineHeight: "50px",
                                        paddingLeft: "25px",
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
                                <div className='hi col-9 '
                                    style={{
                                        height: "50px",
                                        paddingLeft: "5px",
                                        lineHeight: "50px",
                                        // color: "#000000",
                                        fontWeight: "500",
                                        fontSize: "15px",
                                        // fontFamily: ""
                                    }}
                                >
                                    <p > {item.title} </p>
                                </div>
                                </a>
        
                                {item.isEnd && item.isEnd === true && <hr style={{marginTop: "10px"}}></hr>}
                            </div>
                            
                    </div>
                )
            })
        }
        </div>
        <SidebarFooter />
    </div>
}
