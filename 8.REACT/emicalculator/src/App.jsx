
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'

function App() {
  

  

  return (
    <>
    <Header/>
    <div className='row'>
    <div className='col'>
    <div className='border border-black rounded m-5 text-center'> 
    <h1 className='text-center'>Emi calculator</h1>
    <div className='mb-3'>
    <form action="">
      <label form="">Loan amount</label>
        <input type="text" />
    </form>
    </div>
    <div className='mb-3'>
      <label form ="">Tensure</label>
      <input type="text" />
    </div>
    <div className='mb-3'>
      <label form="">Interest Rate in &#37;  </label>
      <input type="text" />
    </div>

    <button type="button" className='btn btn-danger' >Calculate</button>
    </div>
    </div>
    </div>
    <Footer/>
    </>
  )
}

export default App
