// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import AddVideo from '../Components/AddVideo';
import { MdHistory } from "react-icons/md";
import ViewVideo from '../Components/ViewVideo';
import AddCategory from '../Components/AddCategory'

function Home() {

  const [addVideoResponse,SetAddVideoResponse] = useState([])
  return (
    <div>
    <Row className=' justify-content-between m-2 p-2'>
      <Col className='d-flex'>
      <h3 className='m-4 '>Upload New Video</h3>
      <AddVideo SetAddVideoResponse ={SetAddVideoResponse}/>
      </Col>

      <Col>
      <Link to={'/watch-history'} style={{textDecoration:'none'}}>
      <h3>Watch History <MdHistory /></h3> 
      </Link>
      </Col>
    </Row> 

      <Row className='justify-content-between p-5'>
        <Col lg={9}>
        <h3>All Videos</h3>
        <ViewVideo addVideoResponse = {addVideoResponse}/>

        </Col>

        <Col lg={3}>
        <h3>Category</h3>
        <AddCategory/>

        </Col>
      </Row>
    </div>
  )
}

export default Home