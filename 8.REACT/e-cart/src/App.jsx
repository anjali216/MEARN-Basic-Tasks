import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { Route, Routes,Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Wishlist from './Pages/Wishlist'
import View from './pages/View'
import Cart from './pages/Cart'



function App() {


  return (
    <>
        <Header/>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/wishlist' element={<Wishlist/>}/>
      <Route path='/cart' element={<Cart/>}/>
  <Route path='/view/:id' element={<View/>}/>
  <Route path='/*' element={<Navigate to={'/'}/>}/>

</Routes>

        <Footer/>
    </>
  )
}

export default App
