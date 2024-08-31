// eslint-disable-next-line no-unused-vars
import React from 'react'
import { FaUsers } from "react-icons/fa6";
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div >
      
      <MDBNavbar light bgColor='light'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='#'>
            <Link to={'/'}>
            <FaUsers />  
            User-App
            </Link>
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
     
    </div>
  )
}

export default Header