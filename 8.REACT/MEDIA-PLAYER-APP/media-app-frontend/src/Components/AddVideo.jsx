// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { MdOutlineCloudUpload } from "react-icons/md";
import { ImUpload } from "react-icons/im";



function AddVideo() {
  
const[video,setVideo]=useState({
caption:"",
url:"",
embedLink:""

})

  const [show, setShow] = useState(false);



  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      
      <Button variant="" onClick={handleShow}>
      <MdOutlineCloudUpload  className='fs-3'/>

      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
         <Modal.Title><ImUpload  className='mx-2 fs-1'/>  Upload Videos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <p>Please fill the following details....</p>
        <div>
        <input onChange={e=>setVideo({...video,caption:e.target.value})}     type="text" placeholder='video Caption' className='form-control mb-3' />
        <input  onChange={e=>setVideo({...video,url:e.target.value})}      type="text" placeholder='video Image' className='form-control mb-3' />
        <input type="text" placeholder='video Url' className='form-control mb-3' />
       </div>
        </Modal.Body>
        <Modal.Footer>
        <Button variant ="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant='primary'> Upload</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default AddVideo