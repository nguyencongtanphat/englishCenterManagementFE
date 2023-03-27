import React from 'react'
import { Table } from 'react-bootstrap'

const ClassesStudentList = () => {
  return (
    <div style={{backgroundColor:"white", borderRadius:"10px"}}>
        <h3 style={{margin:"20px"}}>Student list</h3>
         <Table striped bordered hover>
            <thead>
                <tr>
                <th>Name</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                </tr>
                <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                </tr>
                <tr>
                <td>3</td>
                <td>Larry the Bird</td>
                <td>@twitter</td>
                <td>@twitter</td>
                </tr>
            </tbody>
    </Table>
    </div>
  )
}

export default ClassesStudentList