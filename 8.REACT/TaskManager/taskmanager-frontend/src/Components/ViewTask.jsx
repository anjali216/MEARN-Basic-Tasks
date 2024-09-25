// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { RiDeleteBin5Fill } from "react-icons/ri";
import { deleteaDATA, getdataAPI } from '../Services/ALLapi';
import Swal from 'sweetalert2'


function ViewTask(addDataResponse) {



    const [allData,setallData]=useState([])

    const [deleteDataStatus,setdeleteDataStatus]=useState("")
    



 const geTdata=async()=>{
    
 
    try{
        const response=await getdataAPI()
    console.log(response.data);

    if(response.status<=200 && response.status<=300){
        setallData(response.data)
    }else{
        console.log(response.message);
        
    }
    
    }
    catch(err){
        console.log(err);
        
    }
 }

 useEffect(()=>{

geTdata() 

setdeleteDataStatus(false)
 },[addDataResponse,deleteDataStatus])







 async function handledelete(id) {

        try {

            const response = await deleteaDATA(id);
            setdeleteDataStatus(true);
            console.log(response);
            Swal.fire({
                icon: "success",
                title: "Success",
                text: "Task Deleted Successfully",
                confirmButtonText: 'Back'
            });
        }
        catch (err) {
            console.log(err);

            Swal.fire({
                icon: "error",
                title: "error",
                text: "ERROR Deleting the Task",
                confirmButtonText: 'Back'
            });

        }

    }

  return (
    <div>
        
<div className="row">

<div className="col-2"></div>
<div className="col-8">

<Table className='my-5' striped bordered hover>
      <thead>
        <tr>
          <th>No</th>
          <th>ID</th>
          <th>Title</th>
          <th>Description</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
       

{

allData? allData.map((item,index)=>(


    // eslint-disable-next-line react/jsx-key
    <tr>
    <td>{index+1}</td>
    <td>{item.id}</td>
    <td>{item.title}</td>
    <td>{item.description}</td>
    <td><button onClick={()=>handledelete(item.id)} style={{backgroundColor:'black'}}><RiDeleteBin5Fill style={{color:"red"}} className='fs-3 ' /></button></td>
  </tr>




))
  :
  <p>no data found</p>

}


        
      </tbody>
    </Table>

</div>
<div className="col-2"></div>
  



</div>
        
    </div>
    
  )
}

export default ViewTask