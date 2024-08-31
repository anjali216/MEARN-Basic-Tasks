
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import {Routes,Route} from 'react-router-dom'
import Home from './Pages/Home'

function App() {
  

  return (
    <>
    <Header/>
    <Routes>
  <Route path ="/" element ={<Home/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
