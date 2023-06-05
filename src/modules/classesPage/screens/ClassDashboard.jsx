import React, { useEffect, useState } from 'react'
import AppLineChart from '../../../globalComponents/LineChart'
import StudentCenterInfo from '../../homePage/components/StudentCenterInfo'
import ClassesStudentList from '../components/ClassesStudentList'
import StudentService from "../../../service.js"
import { useParams } from 'react-router-dom';

function ClassDashboard() {
    const [topStudents, setTopStudents] = useState([]);
    const [students, setStudents] = useState([]);
    const { classId } = useParams();
    console.log(classId);
    
    useEffect(() => {
        StudentService.getStudentReportOverviewByClass(classId)
        .then((res) => {
            console.log('Student List: ',res.data.ResponseResult.Result);
            setStudents(res.data.ResponseResult.Result);
        })
        .catch(err => console.log(err));

        // GetTopStudent
        StudentService.getTopStudents({classid: classId.classId})
        .then((res) => {
            console.log('Top Student List: ',res.data.ResponseResult.Result);
            setTopStudents(res.data.ResponseResult.Result);
        })
        .catch(err => console.log(err));
    }, [classId]);

    if (!Array.isArray(students)) {
        return <div>Invalid student data</div>;
    }

    return (
        <>
            <div style={{backgroundColor:"#F9FAFB", borderRadius:"10px", marginTop:"10px", marginLeft:"12px"}}>
                <div style={{borderRadius:"16px", padding: "24px", backgroundColor:"white", marginBottom:"16px",
                    boxShadow:"0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1)"}}>
                <ClassesStudentList std = {students}/>
                </div>
                <div>
                <AppLineChart/>
                <StudentCenterInfo topStudents={topStudents}/>    
                </div>
            </div>
        </>
    )
}

export default ClassDashboard