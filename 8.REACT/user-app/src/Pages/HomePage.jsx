// eslint-disable-next-line no-unused-vars
import React from 'react'

import { Link} from 'react-router-dom'
function HomePage() {
  return (
    <div>
     <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px' }}>
        <div style={{ flex: '1', marginRight: '20px' }}>
            <h1 style={{ color: '#333', fontFamily: 'Arial, sans-serif' }}>User-App</h1>
            <p style={{ color: '#555', lineHeight: '1.6', marginBottom: '20px' }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellat architecto, sequi, qui alias distinctio harum, quia 
            reprehenderit obcaecati voluptate consequatur ea dolor nobis cupiditate earum nulla velit laboriosam possimus.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto cupiditate animi blanditiis voluptates eius. 
            Fugiat obcaecati dolor ea officia doloribus, atque ipsam rerum. Commodi nobis et veniam cum exercitationem dolore.
            </p>
            <Link to={'/user'}>
                <button style={{ backgroundColor: '#007BFF', color: '#fff', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                  View Users List
                </button>
            </Link>
        </div>
        
        <div style={{ flex: '1', textAlign: 'right' }}>
          <Link to ={'/user'}>
          <img src={'https://cdn-icons-gif.flaticon.com/8819/8819071.gif'} alt="" style={{ width: '100%'}} />
           
          </Link>
        </div>
    </div>
    </div>
  )
}

export default HomePage