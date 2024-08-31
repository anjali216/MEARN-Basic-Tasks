
import './App.css'
import { Routes,Route } from 'react-router-dom'
import Header from './Components/Header'
import Footer from './Components/Footer'

import TaskList from './Components/TaskList'


function App() {
  return (
    <>
    <Header/>
    <Routes>
      < Route path ='/' element= {<TaskList/>}/>
      
      </Routes>
      <Footer/>
    </>
  )
}

export default App
