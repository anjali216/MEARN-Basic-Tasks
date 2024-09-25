// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link } from 'react-router-dom'


function Home() {
  return (
    <div className='row'>
      <div className='row'>
        <div className='col-6 p-5'>
           <h1>Welcome to my Book World</h1>
           <p>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam accusamus ab magnam tempore, vel 
           provident tempora! Optio a impedit at eveniet. Modi inventore minus ut cumque voluptas in veritatis corrupti. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores saepe aspernatur, atque molestiae ullam
           modi laudantium placeat quasi numquam suscipit? Quia laboriosam veniam, qui distinctio vero quaerat enim rem aut.
           </p>
          
           <div className='text-center'>
           <Link to= {'/books'}>
            <button className='btn btn-warning'>Get Started</button>
           </Link>
           </div>
        </div>

        <div className='col-6 p-5'>
          <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqRVpyC9jUuAMyptFvT3duXsY0w-Rio70IfA&s" 
          alt=""  width={'50%'}  height={'300px'} />
        </div>
      </div>
      </div>

  )
}

export default Home