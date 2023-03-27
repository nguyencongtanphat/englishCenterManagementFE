import React from 'react'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function ClassesTable({classes}) {
    return <>
        <Table bordered hover>
            <thead>
                <tr className='text-uppercase text-secondary'>
                    <th>Name</th>
                    <th>Average</th>
                    <th>Num of Student</th>
                    <th>Term</th>
                    <th>Type</th>
                </tr>
            </thead>
            <tbody>
                {
                    classes.map(_class => <tr key={_class.id}>
                        <td>
                            <Link to={_class.name} className='text-decoration-none text-dark fw-semibold'>{_class.name}</Link>
                        </td>
                        <td>{ _class.teacher.name }</td>
                        <td>{ _class.studentQuantity }</td>
                        <td>{ _class.term }</td>
                        <td>{ _class.type.name }</td>
                    </tr>)
                }
            </tbody>
        </Table>
    </>
}

export default ClassesTable