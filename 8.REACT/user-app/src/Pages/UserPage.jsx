// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState }  from 'react'
import ViewUser from './ViewUsers'
function UserPage() {

      const baseUrl = 'https://dummyjson.com/users'
      
      const [users,setUser]=useState([])

    const userfetch = async ()=>{
      
        // eslint-disable-next-line no-unused-vars
        const response = await fetch(baseUrl)
        .then(response=>response.json())
        .then(arraydata=>setUser(arraydata.users))
       console.log(users);
    }


    useEffect(()=>{
        userfetch()
 },)



  return (
    <div>
        <ViewUser data={users}/>
    </div>
  )
}

export default UserPage
