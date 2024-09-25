// eslint-disable-next-line no-unused-vars
import React from 'react'
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
            <img src='https://miro.medium.com/v2/resize:fit:5120/1*42ebJizcUtZBNIZPmmMZ5Q.jpeg' height='40'
              alt=''
              loading='lazy'
            />
            Book Management
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </div>
  )
}

export default Header
