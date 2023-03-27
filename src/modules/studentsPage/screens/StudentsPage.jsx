import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
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
        name: 'Nguyễn Thành Trung',
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
        name: 'Nguyễn Thành Trung',
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
        name: 'Nguyễn Thành Trung',
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
        name: 'Nguyễn Thành Trung',
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
]

function ClassesPage() {
    return (
        <Container>
            <Row className='align-items-center'>
                <Col>
                    <small style={{color: "#6B7280"}}>Student List</small>
                    <h3><b>Student List</b></h3>
                </Col>
                <Col className='text-end' md="auto">
                    <Link to='/classes/addclasses' className='bg-primary text-light py-2 px-3 rounded-2 text-decoration-none'>
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