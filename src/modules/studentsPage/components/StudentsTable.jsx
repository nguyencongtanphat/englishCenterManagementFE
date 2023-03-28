import React from 'react'
import { Col, Form, Row, Table, Container, Badge, Image, Dropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function StudentsTable({std}) {
    return <>
        <Form className='mb-3' style={{ fontSize: 14}}>
            <Row>
                <Form.Group as={Col} xs="auto">
                    <Form.Select name='class' style={{fontSize: '14px'}}>
                        <option idden>Class</option>
                        <option value="tc01">TOEIC</option>
                        <option value="tc02">IETLS</option>
                        <option value="tc03">TOEFL</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group as={Col} xs="auto">
                    <Form.Select name='type' style={{fontSize: '14px'}}>
                        <option hidden>Evaluation</option>
                        <option value="type01">Good</option>
                        <option value="type02">Medium</option>
                        <option value="type03">Not-good</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group as={Col} xs="auto">
                    <Form.Select name='type' style={{fontSize: '14px', borderColor: 'black'}}>
                        <option value="type01">Daily</option>
                        <option selected>Monthly: November</option>
                    </Form.Select>
                </Form.Group>
            </Row>
        </Form>
        <Table bordered hover style={{ fontSize: 14, borderCollapse: 'collapse', borderRadius: '1em', overflow: 'hidden', borderColor: '#E5E7EB'}}>
            <thead>
                <tr className='text-uppercase text-secondary' style={{ backgroundColor: "#F9FAFB"}}>
                    <th>Name</th>
                    <th>Class</th>
                    <th>Phone</th>
                    <th>Attendant</th>
                    <th>Periodic Tests</th>
                    <th>Homework</th>
                    <th>Evaluation</th>
                </tr>
            </thead>
            <tbody>
                {
                    std.map(_std => <tr key={_std.id}>
                        <td>
                            <Container>
                                <Row>
                                    <Col md="auto"><Image src={ _std.avatar } roundedCircle="true" width="40px" height="40px"></Image></Col>
                                    <Col><b>{_std.name}</b><br/>{ _std.mshv}</Col>
                                </Row>
                            </Container>
                        </td>
    
                        <td>{ _std.class.name }</td>
                        <td>{ _std.phone }</td>
                        <td>{ _std.attendent }%<br/>Present: 20/20</td>
                        <td>{ _std.test }%<br/>Score: 650/700</td>
                        <td>{ _std.homework }%<br/>Completed: 20/30</td>
                        <td><h6><Badge pill bg={ _std.evaluation.type }>{ _std.evaluation.value }</Badge></h6></td>
                    </tr>)
                }
            </tbody>
        </Table>
    </>
    
}

export default StudentsTable