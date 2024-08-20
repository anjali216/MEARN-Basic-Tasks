// eslint-disable-next-line no-unused-vars
import React from 'react'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import { FaBackward } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
function WatchHistory() {
  return (
    <div>
       <Row className='mt-5'>
        <Col>
        <h1>Watch History</h1>
        </Col>
        <Col className='me-3'>
        <Link to={'/'}>
          <h5 style={{float :'right'}}>Back to Home <FaBackward /> </h5>
           </Link>
        </Col>
      </Row>

      <Row className='p-5'>
      <Table className="border border-white">
      <thead>
        <tr className='border border-white'>
          <th className='border border-white'>sl.no</th>
          <th className='border border-white'>Caption</th>
          <th className='border boder-white'>Url</th>
          <th className='border border-white'>TimeStamp</th>
          <th className='border border-white'>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr className='border border-white'>
          <td className='border border-white'>1</td>
          <td className='border border-white' >Mark</td>
          <td className='border border-white' >Otto</td>
          <td className='border border-white'>@mdo</td>
          <td className='border border-white'>
          <i className='btn btn-danger fa-solid fa-trash text-white m-3'></i>  
          </td>
        </tr>
        <tr>
          <td className='border border-white' >2</td>
          <td className='border border-white'>Jacob</td>
          <td className='border border-white'>Thornton</td>
          <td className='border border-white' >@fat</td>
          <td className='border border-white'>
          <i className='btn btn-danger fa-solid fa-trash text-white m-3'></i>  
          </td>
        </tr>
        <tr>
          <td className='border border-white'>3</td>
          <td className='border border-white'  colSpan={2}>Larry the Bird</td>
          <td className='border border-white'>@twitter</td>
          <td className='border border-white'>
          <i className='btn btn-danger fa-solid fa-trash text-white m-3'></i>  
          </td>
        </tr>
      </tbody>
    </Table>
      </Row>
    </div>
  )
}

export default WatchHistory
