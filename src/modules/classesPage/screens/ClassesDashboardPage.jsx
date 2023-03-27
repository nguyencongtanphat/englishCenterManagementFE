import React, { useState } from 'react'
import { Container,Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import DatePicker from 'react-datepicker';
import ClassesTab from '../components/ClassesTab'
import ClassesStudentList from '../components/ClassesStudentList'


function ClassesDashboardPage() {
    const [selectedDate, setSelectedDate]= useState(new Date());
    
    return (
        <Container>
            <Row>
                <div className="d-flex flex-row mb-3 ">
                    <Link to="" style={{color:"black", textDecoration:"none", padding:'0 10px'}}>Class List</Link> {'>'}
                    <Link to=""style={{color:"black", textDecoration:"none",padding:'0 10px'}}>Class Detail</Link> {'>'}
                    <Link to=""style={{color:"black", textDecoration:"none",padding:'0 10px'}}>Class Dashboard</Link>
                </div>
            </Row>
            <Row>
                <Col>
                    <h3>TOE700.1</h3>
                </Col>
                <Col lg='auto' className='border border-secondary rounded'>
                    <Button className='bg-black border border-white'>Daily</Button>
                    <Button className='bg-white border border-white'>
                        <DatePicker
                            showIcon
                            selected={selectedDate}
                            onChange={(date) => setSelectedDate(date)}
                        />
                    </Button>
                </Col>
                <div style={{backgroundColor:"#F9FAFB", borderRadius:"10px", marginTop:"10px"}}>
                    <ClassesTab/>
                    <ClassesStudentList/>
                </div>
            </Row>
        </Container>
    )
}

export default ClassesDashboardPage