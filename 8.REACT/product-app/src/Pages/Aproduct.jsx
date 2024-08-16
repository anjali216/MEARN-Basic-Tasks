 // eslint-disable-next-line no-unused-vars
import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState} from 'react'
import { MDBListGroup, MDBListGroupItem } from 'mdb-react-ui-kit';
import { Row,Col } from 'react-bootstrap';

function Aproduct() {
    const pathParams = useParams()
    console.log(pathParams);
    const{id}= useParams()
    console.log(id)



// eslint-disable-next-line no-unused-vars
const baseUrl ='https://dummyjson.com/products'

    // state holding for products details
    const [products,setProducts]= useState({})    // instead of array use object

    // deffine api fetching function
    const Aproductfetch =async ()=>{
        // eslint-disable-next-line no-unused-vars
        const response = await fetch (`https://dummyjson.com/products/${id}`)
        .then(response=>response.json())
        .then(data=>setProducts(data))
        console.log(products);
    }

    useEffect(()=>{
        Aproductfetch()
    },)
 
    
  return (
    <div>
        <Row>
            <Col>
            <img src={products.thumbnail} alt="" />
            <h1> {products.price}</h1>
            </Col>



            <Col>

            <MDBListGroup style={{ minWidth: '22rem' }} light>
      <MDBListGroupItem active noBorders aria-current='true' className='px-3'>
      {products.title}
        
      </MDBListGroupItem>
      <MDBListGroupItem noBorders className='px-3'>
      {products.category}
      </MDBListGroupItem>
      <MDBListGroupItem noBorders className='px-3'>
        {products.brand}
      </MDBListGroupItem>
      <MDBListGroupItem noBorders className='px-3'>
        {products.warrantyInformation}
      </MDBListGroupItem>
      <MDBListGroupItem noBorders className='px-3'>
        {products.availabilityStatus}
      </MDBListGroupItem>
    </MDBListGroup>   
            </Col>



            
        </Row>
    </div>
  )
}

export default Aproduct