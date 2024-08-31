// eslint-disable-next-line no-unused-vars
import React from 'react'

function TaskList() {
  return (
    <div  className='container-fluid'>
     <div className='row'>
       <div className='main-box'>
          <div className='box'>
          <h1 className="text-center">Task Manager </h1>
         
          <div className='form'>
            
            <form action=''>
            <div className="box-5">
                <div className="form-floating mb-3" id="inputtag">
                    <input type="text" className='form-control' id='floatingNo' placeholder=''/>
                    <label htmlFor="floatingNo">No</label>
                </div>
                <div className="form-floating mb-3">
                    <input name="Title" type="text" className="form-control" id="floatingTitle" placeholder="Title"/>
                     <label htmlFor="floatingTitle" id="floatingTitle">Title</label>
                </div>
            </div>
            <div className="form-floating mb-3">
                <input name="Description"  type="text" className="form-control"id="floatingDescriptiont" placeholder="Description"/>
                    <label htmlFor="floatingDescription">Description</label>
            </div>

            <button type="submit" className="btn btn-info" id="buttonsubmit">Submit</button>
            </form>
            </div>          

                    
        <div className='card mt-5'>
          <div className='card' id='cardd'>
            <h1 className ='text-center'> Task</h1>
            <table className="table table-dark table-hover mt-4">
                <thead>
                  <tr>
                    <th scope="col">No</th>
                      <th scope="col">Title</th>
                        <th scope="col">view</th>
                        <th scope="col">Delete</th>
                        <th scope="col">Status</th> 
                    </tr>
                </thead>
                {/* <tbody>
                  <tr>
                  <td colSpan={5} className='text-center' >No tasks available</td>
                  </tr>
                  
             
                </tbody> */}
                
               
            </table>
          </div>
        </div>


            
</div>
</div>
</div>
</div>
  )
}

export default TaskList