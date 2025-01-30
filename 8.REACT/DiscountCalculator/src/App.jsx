
import './App.css'
import { Button} from '@mui/material';
import { TextField } from '@mui/material';
import { useState } from 'react';


function App() {

const [amount,setAmount]=useState(0);
  const [discountpercentage,setdiscountpercentage]=useState(0);
  const[saved,setsaved]=useState(0)
  const [discount,setdiscount]=useState(0);

  console.log(amount,discountpercentage);

  const Calculate=()=>{
    const output=amount*((100-discountpercentage)/100);
    console.log(output)
    const saved=amount-output
    setdiscount(output)
    setsaved(saved)
  }
    const reset=()=>{
      setAmount(0);
      setdiscountpercentage(0);
      setdiscount(0);
      setsaved(0);
    
   }
  
  
  return (
  <>
    <div className="row">
      <div className="col-2"></div>
        <div className="col-8">
          <div className='border border-black rounded m-5 text-center'>
          <h1 className='text-center '>Discount Calculator</h1>


          <div className=' border bg-info border-radius rounded p-5 shadow w-75 mx-auto'>
          <h2>&#x20B9;{discount}</h2>
          <p>Discounted Price</p>
          </div>
          
          <div className="form">
            <form action="">
              <div className="d-flex justify-content between flex-column w-75 mx-auto my-3 ">
              <TextField id="outlined-basic" value={amount ||""} onChange={(e)=>setAmount(e.target.value)} label="Original Price(&#x20B9;)" variant="outlined" /> <br/>
              <TextField id="outlined-basic" value={discountpercentage ||""} onChange={(e)=>setdiscountpercentage(e.target.value)} label="Discount %" variant="outlined" /> <br />
              </div>
              
            <div className="total">
            <h1>&#x20B9;{saved}</h1>
            <p>You Saved</p>
          </div> 

              <div className=" button">
              <Button className='btn' style={{backgroundColor:"black"}} variant="contained" onClick={e=>Calculate(e)}>Calculate</Button> 
              <Button className='btn' style={{backgroundColor:"grey",color:"black"}} variant="outlined" onClick={e=>reset(e)}>Reset</Button>
              </div>
      
            </form>
          </div>
        </div>
      </div>
     
    </div>
    
    </>
  );
}

export default App;
