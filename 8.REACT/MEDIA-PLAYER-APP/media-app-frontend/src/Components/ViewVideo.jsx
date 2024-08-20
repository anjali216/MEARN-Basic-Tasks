// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import VideoCard from '../Components/VideoCard'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { getVideoAPI } from '../Services/AllApi';

// eslint-disable-next-line react/prop-types
function ViewVideo({addVideoResponse}) {

  const [allVideos,setAllVideos] = useState([])

  const getVideos = async()=>{
   try{
    const response = await getVideoAPI()
    console.log(response.data);
    if(response.status>=200 && response.status<=300){
      setAllVideos(response.data)
    }
    else{
      console.log(response.message);
      
    }
    
   }

   catch(err){
    console.log(err);
    
   }
  }
  useEffect(()=>{
    getVideos()
  },[addVideoResponse])
    
 


  return (
    <div>
      <Row className='p-5'>

        {
          allVideos.length > 0 ?
          allVideos.map(item=>(
             // eslint-disable-next-line react/jsx-key
             <Col>
    <VideoCard displayVideo={item}/>
    </Col>
          ))

          :
          <p className='text-danger fw-bloder'> No Videos found</p>
        }

 
  </Row>
  </div>
  )
}

export default ViewVideo