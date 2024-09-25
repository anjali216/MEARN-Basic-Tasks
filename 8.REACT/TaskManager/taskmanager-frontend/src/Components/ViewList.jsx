// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
// import List from './List'
import { deleteAListAPI, getListAPI } from '../Services/AllAPIs'
// import { Row } from 'react-bootstrap'
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { MdDelete } from "react-icons/md";

function ViewList() {
  const [allList,setAllList] =useState([])

  const handleDelete = async (id)=>{
    const response = await deleteAListAPI(id)
    console.log(response);
    
  }

  const getList= async()=>{
    try{
      const response= await getListAPI()
    console.log(response.data);
    if(response.status>=200 && response.status<=300){
      setAllList(response.data)
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
    getList()
  },[])
  return (
      <div className='m-5'>
         <div>
          {
            <MDBTable striped className='p-3 '>
            <MDBTableHead>
              <tr>
                <th scope='col'>Sl.No</th>
                <th scope='col'>Task</th>
                <th scope='col'>Last Date</th>
                <th scope='col'>Action</th>
              </tr>
            </MDBTableHead>
            
          
            {
              allList.length>0?
              allList.map((item,index)=>(
              // eslint-disable-next-line react/jsx-key
              <MDBTableBody>
              <tr>
                <th scope='row'>{index+1}</th>
                <td>{item.task}</td>
                <td>{item.date}</td>
                <td><button onClick={()=>handleDelete(item.id)} className='btn btn-rounded text-danger'><MdDelete /></button></td>
              </tr>
             
            </MDBTableBody>
            ))
            : <p className='text-center m-5 fw-bolder'>No Details found</p>
   }
          </MDBTable>
          
             
          }
         </div>
      </div>
  )
}

export default ViewList