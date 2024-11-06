
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Components/Home'
import Header from './Components/Header'
import Footer from './Components/Footer'
import AddBook from './Components/AddBook'
import BookList from './components/BookList'
//import EditBook from './components/EditBook'

function App() {

  return (
    <>
    <Header/>
    <Routes>

      <Route path='/' element={<Home/>}/>
      <Route path='/books' element={<BookList/>}  />
      <Route path='/add-book' element={<AddBook/>}  />
       {/* <Route path='/edit/:id' element={<EditBook/>}  /> */}


    </Routes>
    <Footer/>

    


 
    </>
  )
}

export default App