import {React, useState} from 'react'
import { Container, Row, Col, Table, Badge, Image, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import DatePicker from 'react-datepicker';

const ClassesStudentList = ({dumyStudent}) => {
  const [selectedDate, setSelectedDate]= useState(new Date());

  return (
    <div style={{borderRadius:"10px"}}>
      <Row>
          <Col>
            <h3 style={{padding:"20px 30px"}}>Student list</h3>
          </Col>
          <Col lg='auto' className='pt-4 pb-4 d-flex'>
            {/* <Button className='bg-black border border-white'>Daily</Button> */}
            <button style={{color:'white', padding:'5px', borderRadius:'6px', backgroundColor:'black'}}>Daily</button>
            <button className='btn-sm' style={{paddingLeft:'15px'}}>
              <DatePicker
                  selected={selectedDate}
                  onChange={(date) => setSelectedDate(date)}
              />
            </button>
          </Col>
        </Row>
        <Table bordered hover style={{ fontSize: 14, borderCollapse: 'collapse', borderRadius: '1em', overflow: 'hidden', borderColor: '#E5E7EB'}}>
            <thead>
                <tr className='text-uppercase text-secondary'>
                    <th>#Name</th>
                    <th>Phone</th>
                    <th>Attendant</th>
                    <th>Periodic Test</th>
                    <th>Homework</th>
                    <th>Evaluation</th>
                </tr>
            </thead>
            <tbody>
                {
                    dumyStudent.map(item => <tr key={item.id}>
                        <td>
                          <Container>
                            <Link to={'/students'} className='text-decoration-none text-dark'>
                              <Row>
                                  <Col md="auto">
                                    <Image src={item.imageURL} roundedCircle="true" width="40px" height="50px">
                                    </Image>
                                  </Col>
                                  
                                  <Col><b>{item.name}</b><br/>{item.studentId}</Col>
                              </Row>
                            </Link>
                          </Container>
                        </td>
                        <td>{item.phone}</td>
                        <td>
                          <div>{item.attendant.persent}%</div>
                          <div className='text-secondary'>Present: {item.attendant.present}</div>
                        </td>
                        <td>
                          <div>{item.periodicTest.persent}%</div>
                          <div className='text-secondary'>Score: {item.periodicTest.score}</div>
                        </td>
                        <td>
                          <div>{item.homework.persent}%</div>
                          <div className='text-secondary'>Completed: {item.homework.completed}</div>
                        </td>
                        <td>
                          <h6><Badge pill bg={item.evaluation.type}>{item.evaluation.value}</Badge></h6>
                        </td>
                    </tr>)
                }
            </tbody>
        </Table>
    </div>
  )
}

export default ClassesStudentList