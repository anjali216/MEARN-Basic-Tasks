// eslint-disable-next-line no-unused-vars
import React from 'react'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import VideoCard from'./VideoCard'
function ViewVideo() {
  return (
    <div>
      <Row className='p-5'>
        <Col>
          <VideoCard/>
        </Col>
        <Col>
          <VideoCard/>
        </Col>
        <Col>
          <VideoCard/>
        </Col>
        <Col>
        <VideoCard/>
        </Col>
      </Row>
      
      
    </div>
  )
}

export default ViewVideo