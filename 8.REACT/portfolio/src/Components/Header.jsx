// eslint-disable-next-line no-unused-vars
import React from 'react'

import { Container, Nav, Navbar, OverlayTrigger, Tooltip } from 'react-bootstrap';

function Header() {
  return (
    <div>
       <Navbar expand="lg" className="bg-body-tertiary w-100" style={{ zIndex: 1 }}>
        <Container>
          <Navbar.Brand href="#home" className="fs-4 fw-bold me-5">Portfolio</Navbar.Brand>
          <div className="d-flex d-lg-none ms-auto align-items-center">
            <Navbar.Toggle aria-controls="basic-navbar-nav">
              <i className="fa-solid fa-bars" style={{ color: 'grey' }}></i>
            </Navbar.Toggle>
            <OverlayTrigger
              placement="bottom"
             
            >
              <i
                className={`fa-solid fa-toggle-off ms-3 ${darkMode ? 'active' : ''}`}
                style={{ color: darkMode ? 'white' : 'grey', cursor: 'pointer' }}
              
              ></i>
            </OverlayTrigger>
          </div>
          <Navbar.Collapse id="basic-navbar-nav" className="custom-collapse ms-5">
            <Nav className="ms-auto w-50 justify-content-between links">
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#projects">Project</Nav.Link>
              <Nav.Link href="#skills">Skills</Nav.Link>
              <Nav.Link href="#contacts">Contacts</Nav.Link>
            </Nav>
            <OverlayTrigger
              placement="bottom"
              overlay={<Tooltip>{tooltipMessage}</Tooltip>}
            >
              <i
                className={`fa-solid fa-toggle-off d-none d-lg-block ms-5 ${darkMode ? 'active' : ''}`}
                style={{ color: darkMode ? 'white' : 'grey', cursor: 'pointer' }}
            
              ></i>
            </OverlayTrigger>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
