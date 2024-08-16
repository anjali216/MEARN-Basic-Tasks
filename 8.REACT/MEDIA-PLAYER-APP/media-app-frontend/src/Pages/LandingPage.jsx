// eslint-disable-next-line no-unused-vars
import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import DiscoImage from '../assets/music1.gif';
import {Link} from 'react-router-dom';
function LandingPage() {
  return (
    <div>
      <section>
  <div className='row'>
  <div className='col-6 p-5'>
   <h1>Welcome to Media Player</h1>
   <p>
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis, nemo libero. Perferendis vero dolores cupiditate aspernatur reiciendis quasi expedita sequi
     corporis, veniam amet laudantium? Voluptatem magni modi dolore fugit libero. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea inventore voluptatibus maxime. Facilis ex itaque officia 
     maiores assumenda nihil voluptas, velit veniam ut eum reprehenderit, quod omnis eius ad unde?
   </p>
   <div className='text-center'>
   
    <Link to ={'./home'}>
    <button className='btn btn-warning'>Get Started</button>
    </Link>
   </div>
   </div>
  <div className="col-6 p-5">
  <img src={DiscoImage} alt="" />
  </div>
  </div>
</section>

<section>
  <h1 className='text-center'>Features</h1>
 <Row className='p-5'>
  <Col>
  <Card style={{ width: '350px' }}>
      <Card.Img variant="top" src=" https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/8cfdf879936425.5cd284d4e4dd3.gif" 
        width={'200px'} height={'300px'}/>
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
      <Card.Img variant="top" src=" https://i.pinimg.com/originals/ec/59/f2/ec59f2f5cfbe75e212eb89d477ccf8d2.gif " 
        width={'200px'} height={'300px'}   />
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
      <Card.Img variant="top" src="https://i.pinimg.com/originals/a7/f2/1e/a7f21e0529977212593b19528dab896a.gif"  
        width={'200px'} height={'300px'}   />
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
<Row className='border border-3 rounded m-5 p-5'>
  <Col>
     <h3> Simple Fast And Powerful</h3> 
     <p style={{textAlign:'justify'}}> <strong>Upload Videos</strong> :Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias distinctio iste veniam at repellendus, illum, incidunt, deleniti quia maxime suscipit quam voluptate. Facere, quia officiis.
      Fugit aut odit modi nihil.</p>
     <p style={{textAlign:'justify'}}><strong>Delete Videos </strong>:ipsum dolor sit amet consectetur adipisicing elit. Molestias distinctio iste veniam at repellendus, illum, incidunt, deleniti quia maxime suscipit quam voluptate.
     Facere, quia officiis. Fugit aut odit modi nihil.</p>
     
     <p style={{textAlign:'justify'}}><strong>Categorize Content </strong>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias distinctio iste veniam at repellendus, illum, incidunt, deleniti quia maxime suscipit quam voluptate. Facere, quia officiis.
     Fugit aut odit modi nihil. </p>
  </Col>
</Row>


</section>


    </div>
  )
}

export default LandingPage