// eslint-disable-next-line no-unused-vars
import React from 'react'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { AiFillDelete } from "react-icons/ai";


function VideoCard({displayVideo}) {
  console.log(displayVideo);
  


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

 
  return (
    <div>
       <CardGroup className='m-3'>
      
      
      <Card>
        <Card.Img variant="top" src={displayVideo.url} className='p-1' onClick={handleShow} />
        <Card.Body>
          <Card.Title>{displayVideo.caption}</Card.Title>
          <Button variant="danger">
          <AiFillDelete />
        
      </Button>
          <Card.Text>
            
          </Card.Text>
        </Card.Body>

        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className='bg-dark'>
          <Modal.Title>Add Category</Modal.Title>
        </Modal.Header>
    
    <Modal.Body className='bg-dark  '> <iframe width="460" height="315" src={displayVideo.embedLink} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> <input type="text" placeholder='Category name' className='form-control' /></Modal.Body>
        <Modal.Footer className='bg-dark' >
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="warning" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
    </div>
  )
}

export default VideoCard