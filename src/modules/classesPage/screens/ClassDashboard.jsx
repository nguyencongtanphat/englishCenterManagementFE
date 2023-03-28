import React from 'react'
import AppCircleChart from '../../../globalComponents/CirlceChart'
import StudentCenterInfo from '../../homePage/components/StudentCenterInfo'
import ClassesStudentList from '../components/ClassesStudentList'


const DUMMY_STUDENTS = [
    {
        StudentID: '20521947',
        Name: 'Nguyễn Thành Trung',
        ImageURL: 'https://www.nicepng.com/png/detail/128-1280406_view-user-icon-png-user-circle-icon-png.png',
        Phone: '0902352835',
        Attendant: {
            Persent:'100%',
            Present: '20/20'
        },
        PeriodicTest:{
            Persent:'90%',
            Score: '800/990'
        },
        Homework:{
            Persent: '100%',
            Completed:'20/30'
        },
        Valuation: "Good"
    },
    {
        StudentID: '20521948',
        Name: 'Nguyễn Đỗ Nhã Khuyên',
        ImageURL: 'https://www.nicepng.com/png/detail/128-1280406_view-user-icon-png-user-circle-icon-png.png',
        Phone: '0902352835',
        Attendant: {
            Persent:'100%',
            Present: '20/20'
        },
        PeriodicTest:{
            Persent:'90%',
            Score: '800/990'
        },
        Homework:{
            Persent: '100%',
            Completed:'20/30'
        },
        Valuation: "Good"
    },
    {
        StudentID: '20521949',
        Name: 'Nguyễn Công Tấn Phát',
        ImageURL: 'https://www.nicepng.com/png/detail/128-1280406_view-user-icon-png-user-circle-icon-png.png',
        Phone: '0902352835',
        Attendant: {
            Persent:'100%',
            Present: '20/20'
        },
        PeriodicTest:{
            Persent:'90%',
            Score: '800/990'
        },
        Homework:{
            Persent: '100%',
            Completed:'20/30'
        },
        Valuation: "Good"
    },
    {
        StudentID: '20521950',
        Name: 'Lê Văn Thiện',
        ImageURL: 'https://www.nicepng.com/png/detail/128-1280406_view-user-icon-png-user-circle-icon-png.png',
        Phone: '0902352835',
        Attendant: {
            Persent:'100%',
            Present: '20/20'
        },
        PeriodicTest:{
            Persent:'90%',
            Score: '800/990'
        },
        Homework:{
            Persent: '100%',
            Completed:'20/30'
        },
        Valuation: "Good"
    },
    {
        StudentID: '20521951',
        Name: 'Đoàn Quốc Bảo',
        ImageURL: 'https://www.nicepng.com/png/detail/128-1280406_view-user-icon-png-user-circle-icon-png.png',
        Phone: '0902352835',
        Attendant: {
            Persent:'100%',
            Present: '20/20'
        },
        PeriodicTest:{
            Persent:'90%',
            Score: '800/990'
        },
        Homework:{
            Persent: '100%',
            Completed:'20/30'
        },
        Valuation: "Good"
    },
    {
        StudentID: '20521952',
        Name: 'Lưu Thượng Vỹ',
        ImageURL: 'https://www.nicepng.com/png/detail/128-1280406_view-user-icon-png-user-circle-icon-png.png',
        Phone: '0902352835',
        Attendant: {
            Persent:'100%',
            Present: '20/20'
        },
        PeriodicTest:{
            Persent:'90%',
            Score: '800/990'
        },
        Homework:{
            Persent: '100%',
            Completed:'20/30'
        },
        Valuation: "Good"
    },
]

function ClassDashboard() {
    return (
        <>
            <div style={{backgroundColor:"#F9FAFB", borderRadius:"10px", marginTop:"10px"}}>
                <ClassesStudentList
                   dumyStuden= {DUMMY_STUDENTS}
                />
                {/* <AppCircleChart/> */}
                <StudentCenterInfo/>

            </div>
        </>
    )
}

export default ClassDashboard