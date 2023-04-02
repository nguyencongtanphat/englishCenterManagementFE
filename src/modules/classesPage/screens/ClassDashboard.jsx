import React from 'react'
import AppLineChart from '../../../globalComponents/LineChart'
import StudentCenterInfo from '../../homePage/components/StudentCenterInfo'
import ClassesStudentList from '../components/ClassesStudentList'

const DUMMY_STUDENTS = [
    {
        id: 'cl01',
        name: 'Jennie Blackpink',
        imageURL: 'https://file.tinnhac.com/resize/600x-/2020/06/17/20200617123908-fdf3.jpg',
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
        name: 'Jennie Blackpink',
        imageURL: 'https://symbols.vn/wp-content/uploads/2022/02/Hinh-Jennie-Blackpink-Dep-de-thuong-nhat.jpg',
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
        name: 'Jennie Blackpink',
        imageURL: 'https://hanoitop10.com/wp-content/uploads/2023/01/anh-jennie-blackpink-dep_11.jpg',
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
        name: 'Jennie Blackpink',
        imageURL: 'https://hanoitop10.com/wp-content/uploads/2023/01/anh-jennie-blackpink-dep_11.jpg',
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
        name: 'Jennie Blackpink',
        imageURL: 'https://hanoitop10.com/wp-content/uploads/2023/01/anh-jennie-blackpink-dep_11.jpg',
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
        name: 'Jennie Blackpink',
        imageURL: 'https://hanoitop10.com/wp-content/uploads/2023/01/anh-jennie-blackpink-dep_11.jpg',
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
        name: 'Jennie Blackpink',
        imageURL: 'https://hanoitop10.com/wp-content/uploads/2023/01/anh-jennie-blackpink-dep_11.jpg',
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
        name: 'Jennie Blackpink',
        imageURL: 'https://hanoitop10.com/wp-content/uploads/2023/01/anh-jennie-blackpink-dep_11.jpg',
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
                 <div className='d-flex justify-content-center' style={{ border:' solid 1px #f9fafb'}} >
                    <AppLineChart/>
                </div>
                 <StudentCenterInfo/>    
                </div>
            </div>
        </>
    )
}

export default ClassDashboard