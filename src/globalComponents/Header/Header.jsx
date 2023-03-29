import React from 'react'
import LogoImg from '../../assets/images/global/logo.png'
import { Col, Container, Row } from 'react-bootstrap'
import HeaderSearchBar from './HeaderSearchBar'
import HeaderNotification from './HeaderNotification'
import HeaderAccount from './HeaderAccount'
import './Header.css'

export default function Header() {
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
                    <HeaderAccount />
                </Col>
            </Row>
        </Container>
    </div>
  )
}
