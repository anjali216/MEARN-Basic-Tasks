/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */

import  { createContext,useState } from 'react'

  //create context


export const addProjectContextResponse = createContext()

function ContextShare({children}) {
 
    const [addProjectRes,setAddProjectRes]=useState("")

  return (
    <div>
        <addProjectContextResponse.Provider value={{addProjectRes,setAddProjectRes}}>
            {children}
        </addProjectContextResponse.Provider>
    </div>
  )
}

export default ContextShare