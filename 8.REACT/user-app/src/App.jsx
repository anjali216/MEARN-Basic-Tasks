
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import {Routes, Route} from 'react-router-dom'
import HomePage from './Pages/HomePage'
import UserPage from './Pages/UserPage'
import PageNotFound from './Pages/PageNotFound'
function App() {
  

  return (
    <>
      <Header/>
        <Routes>
        {/* http://localhost:5173/ - HOME PAGE */}
        <Route path ="/" element={<HomePage/>} />
        {/* http://localhost:5173/ - USER PAGE */}
       <Route path = "/users" element={<UserPage/>}/> 
        {/* http://localhost:5173/ - VIEW A PARTICULAR USER PAGE */}
       <Route path=" /users/view:id"/>
        {/* PAGE NOT FOUND */}
       <Route path="*" element={<PageNotFound/>} />

      </Routes>
      <Footer/>
    </>
  )
}

export default App
