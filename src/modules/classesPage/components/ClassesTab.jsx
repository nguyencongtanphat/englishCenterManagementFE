import React from 'react'
import { Button, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom';


function ClassesTab() {
  return (
    <>
        <div className='d-flex justify-content-between mt-3 rounded' style={{backgroundColor:"#F9FAFB"}}>
            <Link to="#">
                <Button variant="light" className= 'active' style={{padding:"0 100px"}}>Dashboard</Button>
            </Link>
        <Link to="/classes/attendant">  
                <Button variant="light" style={{padding:"0 80px"}}>Attendant</Button>
            </Link>
            <Link to="/classes/periodictests">
                <Button variant="light" style={{padding:"0 80px"}}>Periodic Tests</Button>
            </Link>
            <Link to="/classes/homework">
                <Button variant="light" style={{padding:"0 80px"}}>Homework</Button>
            </Link>
        </div>
    </>
  )
}

export default ClassesTab