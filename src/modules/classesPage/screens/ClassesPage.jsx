import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { faPlusCircle } from '@fortawesome/fontawesome-free-solid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ClassesTable from '../components/ClassesTable'

const DUMMY_CLASSES = [
    {
        id: 'cl01',
        name: 'TOERL700.1',
        teacher: {
            id: 'gv01',
            name: 'Ms. Hoa'
        },
        studentQuantity: 30,
        term: 'Jan 3rd - Apr 2nd',
        type: {
            id: 'type01',
            name: 'TOEIC Readind & Listening',
            target: '700+'
        }
    }, 
    {
        id: 'cl02',
        name: 'IEL55.2',
        teacher: {
            id: 'gv01',
            name: 'Mr. Hung'
        },
        studentQuantity: 30,
        term: 'Jan 3rd - Apr 2nd',
        type: {
            id: 'type01',
            name: 'IELTS',
            target: '5.5+'
        }
    }, 
    {
        id: 'cl03',
        name: 'TOERL700.2',
        teacher: {
            id: 'gv01',
            name: 'Ms. Hoa'
        },
        studentQuantity: 30,
        term: 'Jan 3rd - Apr 2nd',
        type: {
            id: 'type01',
            name: 'TOEIC Readind & Listening',
            target: '700+'
        }
    }, 
    {
        id: 'cl04',
        name: 'TOERL700.3',
        teacher: {
            id: 'gv01',
            name: 'Ms. Hoa'
        },
        studentQuantity: 30,
        term: 'Jan 3rd - Apr 2nd',
        type: {
            id: 'type01',
            name: 'TOEIC Writing & Speaking',
            target: '700+'
        }
    }, 
    {
        id: 'cl05',
        name: 'TOERL700.4',
        teacher: {
            id: 'gv01',
            name: 'Mr. Thinh'
        },
        studentQuantity: 30,
        term: 'Jan 3rd - Apr 2nd',
        type: {
            id: 'type01',
            name: 'TOEIC Readind & Listening',
            target: '700+'
        }
    }, 
    {
        id: 'cl06',
        name: 'TOERL700.5',
        teacher: {
            id: 'gv01',
            name: 'Ms. Huyen'
        },
        studentQuantity: 30,
        term: 'Jan 3rd - Apr 2nd',
        type: {
            id: 'type01',
            name: 'TOEIC Readind & Listening',
            target: '700+'
        }
    }, 
]

function ClassesPage() {
    return (
        <Container>
            <Row className='align-items-center justify-content-between'>
                <Col>
                    <p>Student Lists</p>
                    <h2>Class List</h2>
                </Col>
                <Col className='d-flex justify-content-end'>
                    <Link to='/classes/addclasses' className='bg-primary text-center text-light py-1 px-3 rounded-2 text-decoration-none w-auto'>
                        <FontAwesomeIcon icon={faPlusCircle}/>
                        <span className='ps-2'>Add Class</span>
                    </Link>
                </Col>
            </Row>
            <Row>
                <ClassesTable classes={DUMMY_CLASSES}/>
            </Row>
        </Container>
    )
}

export default ClassesPage