
import './App.css'
import StudentData from './Components/StudentData'

function App() {
  
//parent component

const sName= "Arun"
  return (
    <>
      <h1>Student Name :{sName}</h1>
      <StudentData StudentName ={sName} isPresent={false} />
    </>
  )
}

export default App
