import React, { useEffect, useState } from 'react'
import AppLineChart from '../../../globalComponents/LineChart'
import StudentCenterInfo from '../../homePage/components/StudentCenterInfo'
import ClassesStudentList from '../components/ClassesStudentList'
// import StudentService from "../../../service.js";
import StudentService from "../../../service.js"
// const DUMMY_STUDENTS = [
//     {
//         id: 'cl01',
//         name: 'Jennie Blackpink',
//         imageURL: 'https://i.imgur.com/oirOmyV.png',
//         phone: '0902352835',
//         studentId:'20521097',
//         attendant: {
//             persent: 100,
//             present: '20/20'
//         },
//         periodicTest:{
//             persent: 90,
//             score: '800/990'
//         },
//         homework:{
//             persent: 100,
//             completed:'20/30'
//         },
//         evaluation: {
//             value:'good',
//             type:'success'
//         },
//         class:{
//             id:'cl01',
//             name:'TOE700.1',
//             type:'TOEIC'
//         }
//     },
//     {
//         id: 'cl01',
//         name: 'Đoàn Quốc Bảo',
//         imageURL: 'https://i.imgur.com/oirOmyV.png',
//         phone: '0902352835',
//         studentId:'20521097',
//         attendant: {
//             persent: 100,
//             present: '20/20'
//         },
//         periodicTest:{
//             persent: 90,
//             score: '800/990'
//         },
//         homework:{
//             persent: 100,
//             completed:'20/30'
//         },
//         evaluation: {
//             value:'good',
//             type:'success'
//         },
//         class:{
//             id:'cl01',
//             name:'TOE700.1',
//             type:'TOEIC'
//         }
//     },
//     {
//         id: 'cl01',
//         name: 'Nguyễn Thành Long',
//         imageURL: 'https://i.imgur.com/oirOmyV.png',
//         phone: '0902352835',
//         studentId:'20521097',
//         attendant: {
//             persent: 100,
//             present: '20/20'
//         },
//         periodicTest:{
//             persent: 90,
//             score: '800/990'
//         },
//         homework:{
//             persent: 100,
//             completed:'20/30'
//         },
//         evaluation: {
//             value: "Medium",
//             type: "warning"
//         },
//         class:{
//             id:'cl01',
//             name:'TOE700.1',
//             type:'TOEIC'
//         }
//     },
//     {
//         id: 'cl01',
//         name: 'Nguyễn Thành Trung',
//         imageURL: 'https://i.imgur.com/oirOmyV.png',
//         phone: '0902352835',
//         studentId:'20521097',
//         attendant: {
//             persent: 100,
//             present: '20/20'
//         },
//         periodicTest:{
//             persent: 90,
//             score: '800/990'
//         },
//         homework:{
//             persent: 100,
//             completed:'20/30'
//         },
//         evaluation: {
//             value: "Not-good",
//             type: "danger"
//         },
//         class:{
//             id:'cl01',
//             name:'TOE700.1',
//             type:'TOEIC'
//         }
//     },
//     {
//         id: 'cl01',
//         name: 'Jisoo',
//         imageURL: 'https://i.imgur.com/oirOmyV.png',
//         phone: '0902352835',
//         studentId:'20521097',
//         attendant: {
//             persent: 100,
//             present: '20/20'
//         },
//         periodicTest:{
//             persent: 90,
//             score: '800/990'
//         },
//         homework:{
//             persent: 100,
//             completed:'20/30'
//         },
//         evaluation: {
//             value:'good',
//             type:'success'
//         },
//         class:{
//             id:'cl01',
//             name:'TOE700.1',
//             type:'TOEIC'
//         }
//     },
//     {
//         id: 'cl01',
//         name: 'Tấn Phát',
//         imageURL: 'https://i.imgur.com/oirOmyV.png',
//         phone: '0902352835',
//         studentId:'20521097',
//         attendant: {
//             persent: 100,
//             present: '20/20'
//         },
//         periodicTest:{
//             persent: 90,
//             score: '800/990'
//         },
//         homework:{
//             persent: 100,
//             completed:'20/30'
//         },
//         evaluation: {
//             value: "Not-good",
//             type: "danger"
//         },
//         class:{
//             id:'cl01',
//             name:'TOE700.1',
//             type:'TOEIC'
//         }
//     },
//     {
//         id: 'cl01',
//         name: 'Nhã Khuyên',
//         imageURL: 'https://i.imgur.com/oirOmyV.png',
//         phone: '0902352835',
//         studentId:'20521097',
//         attendant: {
//             persent: 100,
//             present: '20/20'
//         },
//         periodicTest:{
//             persent: 90,
//             score: '800/990'
//         },
//         homework:{
//             persent: 100,
//             completed:'20/30'
//         },
//         evaluation: {
//             value:'good',
//             type:'success'
//         },
//         class:{
//             id:'cl01',
//             name:'TOE700.1',
//             type:'TOEIC'
//         }
//     },
//     {
//         id: 'cl01',
//         name: 'Lê Văn Thiện',
//         imageURL: 'https://i.imgur.com/oirOmyV.png',
//         phone: '0902352835',
//         studentId:'20521097',
//         attendant: {
//             persent: 100,
//             present: '20/20'
//         },
//         periodicTest:{
//             persent: 90,
//             score: '800/990'
//         },
//         homework:{
//             persent: 100,
//             completed:'20/30'
//         },
//         evaluation: {
//             value:'good',
//             type:'success'
//         },
//         class:{
//             id:'cl01',
//             name:'TOE700.1',
//             type:'TOEIC'
//         }
//     },
// ]

function ClassDashboard() {
    const [data, setData] = useState([]);
    useEffect(() => {
        StudentService.getAll()
        .then((res) => {
            console.log('Student List: ',res.data.ResponseResult.Result);
            setData(res.data.ResponseResult.Result);
        })
        .catch(err => console.log(err));
    }, []);
    

    return (
        <>
            <div style={{backgroundColor:"#F9FAFB", borderRadius:"10px", marginTop:"10px", marginLeft:"12px"}}>
                <div style={{borderRadius:"16px", padding: "24px", backgroundColor:"white", marginBottom:"16px",
                    boxShadow:"0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1)"}}>
                <ClassesStudentList std = {data}/>
                </div>
                <div>
                <AppLineChart/>
                <StudentCenterInfo/>    
                </div>
            </div>
        </>
    )
}

export default ClassDashboard