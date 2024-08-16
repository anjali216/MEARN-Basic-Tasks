// eslint-disable-next-line no-unused-vars
import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { MdDelete } from "react-icons/md";
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

function VideoCard() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
        <Card style={{ width: '200px' }}>
      <Card.Img variant="top" src="https://i.ytimg.com/vi/BfCIPsEGAS8/maxresdefault.jpg "  onClick={handleShow}  />
      <Card.Body className='d-flex justify-content-between'>
        <Card.Title>Card Title</Card.Title>
       
        <Button variant="danger"> <MdDelete /></Button>
      </Card.Body>
    </Card>

    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        Woohoo, you are reading this text in a modal!
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
      </div>
  )
}

export default VideoCard