// eslint-disable-next-line no-unused-vars
import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AddVideo from '../Components/AddVideo'
import { Link } from 'react-router-dom'
import { GrHistory } from "react-icons/gr";
import AddCategory from '../Components/AddCategory';
import ViewVideo from '../Components/ViewVideo';
function Home() {
  return (
    <div>
<Row className='d-flex justify-content-between'>
<Col className='d-flex'>
<h3>Upload New Video</h3>
   <AddVideo/>
</Col>
<Col>
  <Link to={'/watch-history'} style={{textDecoration:'none'}}>
    <h3>Watch History <GrHistory /> </h3>
  </Link>
</Col>
</Row>
  
<Row>
  <Col lg={9}>
     {/* View Videos */}
     <h3>All Videos</h3>
    <ViewVideo/>
  </Col>

  <Col lg={3}>
    {/* Category */}
    <h3>Category</h3>
    <AddCategory/>
  </Col>
</Row>

</div>
  )
}

export default Home
