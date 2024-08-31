// eslint-disable-next-line no-unused-vars
import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { BsLaptop } from "react-icons/bs";

function Header() {
  return (
    <div>
   <Navbar className="bg-body-black">
        <Container>
          <Navbar.Brand href="#home" className='text-white fs-2'>
          <BsLaptop  className='me-3 fs-1'/>
           <span className='fs-6 fw-bolder'> Project Fair</span>
          </Navbar.Brand>
        </Container>
      </Navbar>

    </div>
  )
}

export default Header