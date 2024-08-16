/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'

function Counter() {
  const [counter,setCounter]= useState(0)
  const handleIncrement =()=>{
    setCounter(counter+1)
  }
  return (
    <div>
      <div className='container border border-2 border-dark p-5 m-5'>
       <div className='text-center'>
        <h1>{counter}</h1>
       </div>

       <div className='d-flex justify-content-evenly'>
  
         <button onClick={handleInrement} className='btn btn-success'>Increment</button> 
        <button className='btn btn-primary'>Decrement</button>
        <button className='btn btn-warning'>Reset</button>
       </div>
      </div>
      
      </div>
  )
}

export default Counter