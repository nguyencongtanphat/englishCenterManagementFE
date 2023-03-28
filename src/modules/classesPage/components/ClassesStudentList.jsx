import React from 'react'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const ClassesStudentList = ({dumyStuden}) => {
  return (
    <div style={{borderRadius:"10px"}}>
        <h3 style={{padding:"20px 30px"}}>Student list</h3>
        <Table bordered hover>
            <thead>
                <tr className='text-uppercase text-secondary'>
                    <th>#Name</th>
                    <th>Phone</th>
                    <th>Attendant</th>
                    <th>Periodic Test</th>
                    <th>Homework</th>
                    <th>Valuation</th>
                </tr>
            </thead>
            <tbody>
                {
                    dumyStuden.map(item => <tr key={item.StudentID}>
                        <td className='d-flex'>
                            <Link to={'/students'} className='text-decoration-none text-dark'>
                                <img src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp" className="rounded-circle shadow-3" style={{width: '50px'}} alt="Avatar" />
                                <span className='ps-3' >{item.Name}</span> 
                                {/* <span>{item.StudentID}</span>  */}
                            </Link>
                        </td>
                        <td>{ item.Phone}</td>
                        <td>
                          <div>{item.Attendant.Persent}</div>
                          <div className='text-secondary'>Present: {item.Attendant.Present}</div>
                        </td>
                        <td>
                          <div>{item.PeriodicTest.Persent}</div>
                          <div className='text-secondary'>Score: {item.PeriodicTest.Score}</div>
                        </td>
                        <td>
                          <div>{item.Homework.Persent}</div>
                          <div className='text-secondary'>Completed: {item.Homework.Completed}</div>
                        </td>
                        <td>
                          <div className='label label-success'>{item.Valuation}</div>
                        </td>
                    </tr>)
                }
            </tbody>
        </Table>
    </div>
  )
}

export default ClassesStudentList