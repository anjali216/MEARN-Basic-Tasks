// eslint-disable-next-line no-unused-vars
import React from 'react'
import { MdOutlineTaskAlt } from "react-icons/md";
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit';
  
function Header() {
  return (
    <div>
   <MDBNavbar light bgColor='light'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='#'>
          <MdOutlineTaskAlt className='me-3 fs-1' />
          Task Manager App
          </MDBNavbarBrand>
          </MDBContainer>
      </MDBNavbar>
    </div>
  )
}

export default Header