// eslint-disable-next-line no-unused-vars
import React from 'react'
import Link from 'react'
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';
  
// eslint-disable-next-line react/prop-types
function ViewUsers({data}) {
  console.log(data);
  return (
    <div>
         <div className='row'>
         {
            // eslint-disable-next-line react/prop-types
            data.map(item=>(
          // eslint-disable-next-line react/jsx-key
          <div className='col m-5'>
    
    <MDBCard >
      <MDBCardImage src={item.image} position='top' alt='...' />
      <MDBCardBody>
        <MDBCardTitle>{item.id}</MDBCardTitle>
                  <MDBCardText > <strong>First Name</strong> : {item.firstName}
                   </MDBCardText>
                   <MDBCardText> <strong>Last Name</strong> : {item.lastName}
                   </MDBCardText>
                   <MDBCardText> <strong> Age </strong> : {item.age}
                   </MDBCardText>
                   <MDBCardText> <strong>Gender</strong> : {item.gender}
                   </MDBCardText>
                   <MDBCardText> <strong> Email </strong> : {item.email}
                   </MDBCardText>
                   <MDBCardText><strong>Phone number</strong> : {item.phone}
                   </MDBCardText>
                   <MDBCardText><strong>DOB</strong> : {item.birthDate}
                   </MDBCardText>
                     <MDBCardText><strong>BloodGroup</strong> : {item.bloodGroup}
                   </MDBCardText>
                  
                   <MDBCardText><strong>Company</strong> : {item.company.name}</MDBCardText>
                   <MDBCardText><strong>Job</strong> : {item.company.title} </MDBCardText>
                   <MDBCardText><strong>Address</strong> : {item.address.address} </MDBCardText>
                   <MDBCardText><strong>City</strong> : {item.address.city}</MDBCardText>
        
                   <div className='text-center'>
           <Link to ={`/users/view/${item.id}`}>
           </Link>
            </div>

        <MDBBtn href='#'>View Users</MDBBtn> 
      </MDBCardBody>
    </MDBCard>
   </div>
 ))
}

    </div>
    </div>
  )
}
 

export default ViewUsers
