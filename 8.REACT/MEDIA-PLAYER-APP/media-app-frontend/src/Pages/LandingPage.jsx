// eslint-disable-next-line no-unused-vars
import React from 'react'
import {Link} from 'react-router-dom'
import DiscoImage from '../assets/musicbeans.gif'
import  Row  from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card';


function LandingPage() {
  return (
    <div>

    <section>
      <div className='row'>
       <div className='col-6 p-5'>
        <h1>Welcome To Media Player</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ab est quasi illo quo repellendus deleniti asperiores repudiandae voluptatibus 
          facilis optio architecto, aliquam similique voluptate autem aliquid iusto. Vero, ex.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, nostrum! Illo quis asperiores sed rerum voluptas iure, saepe repudiandae 
          consequatur, accusantium voluptates tenetur nesciunt cumque hic officia nulla sint magnam?
        </p>
        <div className='text-center'>
          <Link to ={'./home'}>
          <button className='btn btn-warning'>Get Started</button>
          </Link>
        </div>
       </div>
       
       <div className='col-6 p-5'>
       <img src={DiscoImage} alt="" />
       </div>
      </div>
    </section>
   
   <section>
    <h1 className='text-center'>Features</h1>
    <Row className='p-5'>
      <Col>
      <Card style={{ width: '350px' }}>
      <Card.Img variant="top" src=" https://i.pinimg.com/originals/a7/f2/1e/a7f21e0529977212593b19528dab896a.gif"  width={'200px'}  height={'300px'} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the cards content.
        </Card.Text>
       </Card.Body>
       </Card>
      </Col>

      <Col>
      <Card style={{ width: '350px' }}>
      <Card.Img variant="top" src= "https://cdn.dribbble.com/users/401212/screenshots/2933339/musicplayer_2_dr.gif"  width={'200px'}  height={'300px'} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the cards content.
        </Card.Text>
       </Card.Body>
       </Card>
      </Col>

      <Col>
      <Card style={{ width: '350px' }}>
      <Card.Img variant="top" src=" https://i.pinimg.com/originals/ec/59/f2/ec59f2f5cfbe75e212eb89d477ccf8d2.gif"  width={'200px'}  height={'300px'} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the cards content.
        </Card.Text>
       </Card.Body>
       </Card>    
      </Col>
    </Row>
   </section>


   <section>
    <Row className='border border-3 rounded p-5'>
      <Col>
       <h3>Simple and Powerful</h3>
       <p style={{textAlign:'justify'}}>  <strong>Upload Videos</strong> :Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum iusto perferendis aliquam consectetur assumenda repellat dolores, laudantium architecto in molestias minima minus animi nemo 
        exercitationem voluptate cupiditate. Laboriosam, nam quas!</p>
        <p style={{textAlign:'justify'}}>  <strong>Delete Videos</strong> :Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum iusto perferendis aliquam consectetur assumenda repellat dolores, laudantium architecto in molestias minima minus animi nemo 
        exercitationem voluptate cupiditate. Laboriosam, nam quas!</p>
        <p style={{textAlign:'justify'}}>  <strong>Categorize Content</strong> :Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum iusto perferendis aliquam consectetur assumenda repellat dolores, laudantium architecto in molestias minima minus animi nemo 
        exercitationem voluptate cupiditate. Laboriosam, nam quas!</p>
      </Col>

      <Col>
      <img src="https://i.pinimg.com/originals/e4/63/4d/e4634da841c0ed906e77cab9b6b733ef.gif" alt="" width = {'450px'}/>
      </Col>
    </Row>
   </section>
  </div>
  )
}

export default LandingPage