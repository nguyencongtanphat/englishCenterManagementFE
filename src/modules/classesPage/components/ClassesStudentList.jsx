import {React, useState} from 'react'
import { Container, Row, Col, Table, Badge, Image, Button} from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import DatePicker from 'react-datepicker';
import deleteSVG from "../../../assets/images/global/delete.svg";
import editSVG from "../../../assets/images/global/edit.svg";

const ClassesStudentList = ({std}) => {
  let navigate = useNavigate();
  const [selectedDate, setSelectedDate]= useState(new Date());

  return (
    <div style={{borderRadius:"10px"}}>
      <Row>
          <Col>
            <p style={{fontWeight:700, fontSize:"20px"}}>Student list</p>
          </Col>
          <Col lg='auto' className='pt-4 pb-4 d-flex'>
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
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Attendant</th>
                    <th>Periodic Test</th>
                    <th>Homework</th>
                    <th>Evaluation</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    std.map(_std => <tr key={_std.id} onClick={()=>{navigate(`/students/${_std._id}`);
                  }} >
                        <td>
                          <Container>
                            <Link to={'/students'} className='text-decoration-none text-dark'>
                              <Row>
                                  <Col md="auto">
                                    <Image src={_std.ImageURL} roundedCircle="true" width="40px" height="50px">
                                    </Image>
                                  </Col>
                                  <Col><b>{_std.Name}</b><br/>{_std.StudentID}</Col>
                              </Row>
                            </Link>
                          </Container>
                        </td>
                        <td>{_std.PhoneNumber}</td>
                        {/* <td>
                          <div>{_std.attendant.persent}%</div>
                          <div className='text-secondary'>Present: {_std.attendant.present}</div>
                        </td>
                        <td>
                          <div>{_std.periodicTest.persent}%</div>
                          <div className='text-secondary'>Score: {_std.periodicTest.score}</div>
                        </td>
                        <td>
                          <div>{_std.homework.persent}%</div>
                          <div className='text-secondary'>Completed: {_std.homework.completed}</div>
                        </td>
                        <td>
                          <h6><Badge pill bg={_std.evaluation.type}>{_std.evaluation.value}</Badge></h6>
                        </td> */}
                        <td>
                          90%<br />
                          <label style={{ color: "#6B7280" }}>Present: 20/20</label>
                        </td>
                        <td>
                          80%<br />
                          <label style={{ color: "#6B7280" }}>Score: 650/700</label>
                        </td>
                        <td>
                          95%<br />
                          <label style={{ color: "#6B7280" }}>Score: 90/100</label>
                        </td>
                        <td>
                          <h6>
                            <Badge pill bg="success">Good</Badge>
                          </h6>
                        </td>
                        <td>
                          <button><img src={editSVG} alt="edit"/></button>
                          <br></br>
                          <button><img src={deleteSVG} alt="delete"/></button>
                      </td>
                    </tr>)
                }
            </tbody>
        </Table>
    </div>
  )
}

export default ClassesStudentList