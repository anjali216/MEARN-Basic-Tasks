/* eslint-disable no-unused-vars */

import React from 'react'

// eslint-disable-next-line react/prop-types
function DataSet({eName}) {
  console.log(eName);
  return (
    <div>

      {eName}


      {/* {
        eName &&
      <h1>Employee Name: {eName}</h1>
      }*/}

      {/* {
        eName ?
        <h1>Employee Name :{eName}</h1>
        :
        <h1>Nothing to Display</h1>
      } */}
      </div>
  )
}

export default DataSet