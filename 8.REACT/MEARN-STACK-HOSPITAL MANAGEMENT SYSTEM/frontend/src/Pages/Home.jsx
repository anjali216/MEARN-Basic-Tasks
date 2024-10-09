// eslint-disable-next-line no-unused-vars
import React from 'react'
import Biography from '../components/Biography'
import Departments  from '../components/Departments'
import Hero  from '../components/Hero'
import MessageForm from '../components/MessageForm'

const Home = () => {
  return (
    <>
    
     <Hero  title = {
      "Welcome to ZeeCare Medical Institute | Your Trusted Health Provider"
     } 
     imageUrl ={"/hero.png"}
     />


     <Biography imageUrl={"/about.png"}/>
     <Departments/>
     <MessageForm/>
    </>
  )
};

export default Home