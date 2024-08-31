// eslint-disable-next-line no-unused-vars
import React, { useEffect , useState } from 'react'
import ViewUser from './ViewUser'

function UserPage() {
    const baseUrl = 'https://dummyjson.com/users'
    


const [user,setUser]=useState([])

    const userfetch = async ()=>{
        // eslint-disable-next-line no-unused-vars
        const response = await fetch(baseUrl)
        .then(response=>response.json())
        .then(arraydata=>setUser(arraydata.users))
console.log(user);

    }
    useEffect(()=>{
        userfetch()

        },)
  return (
    <div>
        
            <ViewUser data={user}/>

    </div>
  )
}

export default UserPage