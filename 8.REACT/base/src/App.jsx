

import { useEffect,useState } from 'react'
import './App.css'
import DataSet  from './Components/DataSet'

function App() {

//let employeeName

//state creation

// eslint-disable-next-line no-undef, no-unused-vars
const [employeeName,setEmployeeName] = useState('Ann')
  

const handleAlert =()=>{
  setEmployeeName("Ann Luke")
  alert("Employee name has been changed")
}
useEffect(()=>{
handleAlert()
},[])

  // const handleAlert =()=>{
  //   alert("Login success")
  // }

  // const handleArguments =(details)=>{
  //   alert(details)
  // }


  // const handleInput =(e)=>{
  //   //alert(details)
  //   console.log(e.target.value);
  // }

  return (
    <>
    {/* <div>Hello World</div>

     <button onClick={handleAlert} style={{backgroundColor:'black',color:'white',padding:'10px'}}>Login</button>
 
     <button onClick={()=>handleArguments("login : username,password")} style={{backgroundColor:'black',color:'white',padding:'10px'}}>Login</button>

      <input  onChange={(e)=>handleInput(e)}   type="text" placeholder='enter data' /> */}
     
     { <DataSet eName ={employeeName}/> }
    </>
  )
}

export default App
