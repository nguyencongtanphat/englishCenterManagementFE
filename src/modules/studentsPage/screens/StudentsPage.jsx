import React from 'react'
import { Col, Container, Row, Stack } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { faPlusCircle } from '@fortawesome/fontawesome-free-solid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import StudentsTable from '../components/StudentsTable'

const DUMMY_STUDENTS = [
    {
        id: 'cl01',
        name: 'Nguyễn Thành Trung',
        avatar: 'https://i.imgur.com/DizC5X0.png',
        mshv: '20520334',
        class: {
            id: 'cl01',
            name: 'TOE500.1',
            type: 'TOEIC'
        },
        phone: '0839132695',
        attendent: 100,
        test: 100,
        homework: 100,
        evaluation: {
            value: "Good",
            type: "success"
        }
    }, 
    {
        id: 'cl01',
        name: 'Nguyễn Công Tấn Phát',
        avatar: 'https://i.imgur.com/s1LJioE.png',
        mshv: '20520334',
        class: {
            id: 'cl01',
            name: 'TOE500.1',
            type: 'TOEIC'
        },
        phone: '0839132695',
        attendent: 100,
        test: 100,
        homework: 100,
        evaluation: {
            value: "Not-good",
            type: "danger"
        }
    }, 
    {
        id: 'cl01',
        name: 'Đoàn Quốc Bảo',
        avatar: 'https://i.imgur.com/SZT3DnJ.png',
        mshv: '20520334',
        class: {
            id: 'cl01',
            name: 'TOE500.1',
            type: 'TOEIC'
        },
        phone: '0839132695',
        attendent: 100,
        test: 100,
        homework: 100,
        evaluation: {
            value: "Medium",
            type: "warning"
        }
    }, 
    {
        id: 'cl01',
        name: 'Nguyễn Đỗ Nhã Khuyên',
        avatar: 'https://i.imgur.com/UyS6gMi.png',
        mshv: '20520334',
        class: {
            id: 'cl01',
            name: 'TOE500.1',
            type: 'TOEIC'
        },
        phone: '0839132695',
        attendent: 100,
        test: 100,
        homework: 100,
        evaluation: {
            value: "Good",
            type: "success"
        }
    }, 
    {
        id: 'cl01',
        name: 'Lê Văn Thiện',
        avatar: 'https://i.imgur.com/dCH07c0.png',
        mshv: '20520334',
        class: {
            id: 'cl01',
            name: 'TOE500.1',
            type: 'TOEIC'
        },
        phone: '0839132695',
        attendent: 100,
        test: 100,
        homework: 100,
        evaluation: {
            value: "Good",
            type: "success"
        }
    }, 
    {
        id: 'cl01',
        name: 'Lưu Thượng Vỹ',
        avatar: 'https://i.imgur.com/XZuh0eK.png',
        mshv: '20520334',
        class: {
            id: 'cl01',
            name: 'TOE500.1',
            type: 'TOEIC'
        },
        phone: '0839132695',
        attendent: 100,
        test: 100,
        homework: 100,
        evaluation: {
            value: "Good",
            type: "success"
        }
    }, 
    {
        id: 'cl01',
        name: 'Nguyễn Thành Long',
        avatar: 'https://i.imgur.com/oirOmyV.png',
        mshv: '20520334',
        class: {
            id: 'cl01',
            name: 'TOE500.1',
            type: 'TOEIC'
        },
        phone: '0839132695',
        attendent: 100,
        test: 100,
        homework: 100,
        evaluation: {
            value: "Good",
            type: "success"
        }
    }, 
]

function ClassesPage() {
    return (
        <Container  style={{fontSize: "14px", marginTop: "1px"}} className='mx-1'>
            <Row className='align-items-center'>
                <Col>
                    <Stack direction="horizontal" gap={2} className="mt-3">
                        <Link  style={{color:"black", textDecoration:"none"}} to="/students"><small style={{color: "#6B7280"}}>Student List</small></Link>
                    </Stack>
                    <h3 className="mb-3"><b>Student List</b></h3>
                </Col>
                <Col className='text-end' md="auto">
                    <Link to='new' className='bg-primary text-light py-2 px-3 rounded-2 text-decoration-none' style={{alignItems: "center"}}>
                        <FontAwesomeIcon icon={faPlusCircle}/>
                        <span className='ps-2' style={{fontSize: "14px"}}>Add Student</span>
                    </Link>
                </Col>
            </Row>
            <Row>
                <StudentsTable std={DUMMY_STUDENTS}/>
            </Row>
            
        </Container>
    )
}

export default  ClassesPage