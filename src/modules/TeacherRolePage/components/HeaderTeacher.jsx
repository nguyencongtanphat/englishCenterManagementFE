import React from 'react'
import LogoImg from '../../../assets/images/global/earth.png'
import { Col, Container, Row } from 'react-bootstrap'
import HeaderSearchBar from '../../../globalComponents/Header/HeaderSearchBar'
import HeaderNotification from '../../../globalComponents/Header/HeaderNotification'
import HeaderAccount from '../../../globalComponents/Header/HeaderAccount'
import '../../../globalComponents/Header/Header.css'

export default function Header({name}) {
  return (
    <div className='sticky-top header-disable-copy'>
        <Container fluid
        style={{
            height: "70px", 
            padding: "12px",
            backgroundColor: "white",
            borderBottom: "1px solid #E5E7EB"
            }}>
            <Row>
                {/* Header Logo */}
                <Col className='col-1'>
                   <div>
                        <a href='#'> 
                            <img src={LogoImg} style={{lineHeight: '46px', height: '46px', padding: '6px'}}/>
                        </a> 
                   </div>
                </Col>
                {/* Search */}
                <Col className='col-5'>
                    <HeaderSearchBar />
                </Col>
                {/* Account Info */}
                <Col className='col-6 d-flex justify-content-end'>
                    <HeaderNotification/>
                    <div class="dropdown">
            <button class="btn bg-dark dropdown-toggle text-white" type="button" id="dropdownMenuButton"
                data-mdb-toggle="dropdown" aria-expanded="false" 
                style={{height: "44px", fontWeight: "600", borderRadius: "100px"}}>
                <span style={{marginRight: "2px", fontSize:"14px", fontWeight:600}}> Teacher: {name} </span>
            </button>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <li>
                            <a class="dropdown-item" href='#'>Edit</a>
                        </li>
                        <li>
                            <a class="dropdown-item" href='/login'>Log out</a>
                        </li>
                        <li>
                            <a class="dropdown-item" href='#'>Info</a>
                        </li>
                    </ul>
                </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}
