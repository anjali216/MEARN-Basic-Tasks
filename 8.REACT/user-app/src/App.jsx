
import './App.css'
import { Route,Routes } from 'react-router-dom'
import Header from './Components/Header'
import Footer from './Components/Footer'
import HomePage from './Pages/HomePage'
import UserPage from './Pages/UserPage'
import ViewUser from './Pages/ViewUser'
//import Auser from './assets/Pages/Auser'
import PageNotFound from './Pages/PageNotFound'



function App() {
  

  return (
    <>
      <Header/>

        <Routes>

          <Route path='/' element={<HomePage/> }/>
          <Route path='/user' element={<UserPage/> }/>
          <Route path='/view' element={ <ViewUser/>}/>
          {/* <Route path='/user/view/:id' element={<Auser/> }/> */}
          <Route path='*' element={ <PageNotFound/>}/>

        </Routes>

      <Footer/>
    </>
  )
}

export default App