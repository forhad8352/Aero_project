import React from 'react'
import {Navbar,Container,Nav,} from "react-bootstrap"
import { IoMdCloudDownload } from "react-icons/io";
import logo from "../../assets/logo.png"
import './menu.css'

const Menu = () => {
  return (
        <Navbar expand="lg" className='menu-bg'>
        <Container>
          <Navbar.Brand href="#home">
                <img src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#home">Home</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <div className='btn'>
                <a href="#"><IoMdCloudDownload /> Download</a>
          </div>
        </Container>
      </Navbar>      
  )
}

export default Menu