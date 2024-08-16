// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Row,Col, Button } from 'react-bootstrap'
import { Link} from 'react-router-dom'
function HomePage() {
  return (
    <div>
      <Row className='m-5 p-5'>
         <Col>
           <img src=" https://cdn-icons-gif.flaticon.com/8819/8819071.gif" width={'100%'} alt="" />
         </Col>
        <Col>
        <h1>User</h1>
         <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga nihil dignissimos minima officia, quidem omnis laborum nulla aspernatur perferendis ab neque deserunt recusandae iste saepe sit inventore blanditiis enim sunt!
            Quisquam ducimus fugit id officiis, facere et, quis unde explicabo nesciunt sunt quo iusto magnam officia corrupti 
            facilis libero, optio ipsa voluptates laborum! Vero dolore a minus quidem iste tenetur.</p>
            <Link to ={'/users'}>
            <Button className='btn btn-primary mt-3'>View Users List</Button>
            </Link>
        </Col>

      </Row>
    </div>
  )
}

export default HomePage
