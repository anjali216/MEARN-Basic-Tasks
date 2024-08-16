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
function ViewProduct({data}) {
console.log(data);


  return (
    <div>
      <div className='row'>
      {
        // eslint-disable-next-line react/prop-types
        data.map(item=>(
          // eslint-disable-next-line react/jsx-key
          <div className='col m-5'>
          <MDBCard style={{width:'240px',height:'450px'}}>
          <MDBCardImage src={item.images} position='top' alt='...' />
          <MDBCardBody>
            <MDBCardTitle>{item.title}</MDBCardTitle>
            <MDBCardText>
            Price :${item.price}
            </MDBCardText>
            <div className='text-center'>
           <Link to ={`/products/view/${item.id}`}>
           </Link>
            </div>
            <MDBBtn href='#'>Button</MDBBtn>
          </MDBCardBody>
        </MDBCard>
         </div>

        ))

      }
     </div>
    </div>
  )
}

export default ViewProduct
