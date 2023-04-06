import React from 'react'
import AppLineChart from '../../../globalComponents/LineChart'
import StudentCenterInfo from '../../homePage/components/StudentCenterInfo'
import ClassesStudentList from '../components/ClassesStudentList'

const DUMMY_STUDENTS = [
    {
        id: 'cl01',
        name: 'Jennie Blackpink',
        imageURL: 'https://i.imgur.com/oirOmyV.png',
        phone: '0902352835',
        studentId:'20521097',
        attendant: {
            persent: 100,
            present: '20/20'
        },
        periodicTest:{
            persent: 90,
            score: '800/990'
        },
        homework:{
            persent: 100,
            completed:'20/30'
        },
        evaluation: {
            value:'good',
            type:'success'
        },
        class:{
            id:'cl01',
            name:'TOE700.1',
            type:'TOEIC'
        }
    },
    {
        id: 'cl01',
        name: 'Đoàn Quốc Bảo',
        imageURL: 'https://i.imgur.com/oirOmyV.png',
        phone: '0902352835',
        studentId:'20521097',
        attendant: {
            persent: 100,
            present: '20/20'
        },
        periodicTest:{
            persent: 90,
            score: '800/990'
        },
        homework:{
            persent: 100,
            completed:'20/30'
        },
        evaluation: {
            value:'good',
            type:'success'
        },
        class:{
            id:'cl01',
            name:'TOE700.1',
            type:'TOEIC'
        }
    },
    {
        id: 'cl01',
        name: 'Nguyễn Thành Long',
        imageURL: 'https://i.imgur.com/oirOmyV.png',
        phone: '0902352835',
        studentId:'20521097',
        attendant: {
            persent: 100,
            present: '20/20'
        },
        periodicTest:{
            persent: 90,
            score: '800/990'
        },
        homework:{
            persent: 100,
            completed:'20/30'
        },
        evaluation: {
            value: "Medium",
            type: "warning"
        },
        class:{
            id:'cl01',
            name:'TOE700.1',
            type:'TOEIC'
        }
    },
    {
        id: 'cl01',
        name: 'Nguyễn Thành Trung',
        imageURL: 'https://i.imgur.com/oirOmyV.png',
        phone: '0902352835',
        studentId:'20521097',
        attendant: {
            persent: 100,
            present: '20/20'
        },
        periodicTest:{
            persent: 90,
            score: '800/990'
        },
        homework:{
            persent: 100,
            completed:'20/30'
        },
        evaluation: {
            value: "Not-good",
            type: "danger"
        },
        class:{
            id:'cl01',
            name:'TOE700.1',
            type:'TOEIC'
        }
    },
    {
        id: 'cl01',
        name: 'Jisoo',
        imageURL: 'https://i.imgur.com/oirOmyV.png',
        phone: '0902352835',
        studentId:'20521097',
        attendant: {
            persent: 100,
            present: '20/20'
        },
        periodicTest:{
            persent: 90,
            score: '800/990'
        },
        homework:{
            persent: 100,
            completed:'20/30'
        },
        evaluation: {
            value:'good',
            type:'success'
        },
        class:{
            id:'cl01',
            name:'TOE700.1',
            type:'TOEIC'
        }
    },
    {
        id: 'cl01',
        name: 'Tấn Phát',
        imageURL: 'https://i.imgur.com/oirOmyV.png',
        phone: '0902352835',
        studentId:'20521097',
        attendant: {
            persent: 100,
            present: '20/20'
        },
        periodicTest:{
            persent: 90,
            score: '800/990'
        },
        homework:{
            persent: 100,
            completed:'20/30'
        },
        evaluation: {
            value: "Not-good",
            type: "danger"
        },
        class:{
            id:'cl01',
            name:'TOE700.1',
            type:'TOEIC'
        }
    },
    {
        id: 'cl01',
        name: 'Nhã Khuyên',
        imageURL: 'https://i.imgur.com/oirOmyV.png',
        phone: '0902352835',
        studentId:'20521097',
        attendant: {
            persent: 100,
            present: '20/20'
        },
        periodicTest:{
            persent: 90,
            score: '800/990'
        },
        homework:{
            persent: 100,
            completed:'20/30'
        },
        evaluation: {
            value:'good',
            type:'success'
        },
        class:{
            id:'cl01',
            name:'TOE700.1',
            type:'TOEIC'
        }
    },
    {
        id: 'cl01',
        name: 'Lê Văn Thiện',
        imageURL: 'https://i.imgur.com/oirOmyV.png',
        phone: '0902352835',
        studentId:'20521097',
        attendant: {
            persent: 100,
            present: '20/20'
        },
        periodicTest:{
            persent: 90,
            score: '800/990'
        },
        homework:{
            persent: 100,
            completed:'20/30'
        },
        evaluation: {
            value:'good',
            type:'success'
        },
        class:{
            id:'cl01',
            name:'TOE700.1',
            type:'TOEIC'
        }
    },
]

function ClassDashboard() {
    return (
        <>
            <div style={{backgroundColor:"#F9FAFB", borderRadius:"10px", marginTop:"10px"}}>
                <ClassesStudentList
                   dumyStudent= {DUMMY_STUDENTS}
                />
                <h3 className='p-4' >Overall</h3>
                <div>
                <AppLineChart/>
                <StudentCenterInfo/>    
                </div>
            </div>
        </>
    )
}

export default ClassDashboard