
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import {Route, Routes} from 'react-router-dom'
import ProductPage from './Pages/ProductPage'
import HomePage from './Pages/Homepage'
import PageNotFound from './Pages/PageNotFound'
import AProduct from './Pages/AProduct'
function App() {
  

  return (
    <>
    <Header/>
      <Routes>
       <Route path="/" element={<HomePage/>} />  
       <Route path="/products" element={<ProductPage/>} />
       <Route path="/products/view/:id" element={<AProduct/>} />
       <Route path="*" element={<PageNotFound/>} />

      </Routes>
      <Footer/>
    </>
  )
}

export default App
