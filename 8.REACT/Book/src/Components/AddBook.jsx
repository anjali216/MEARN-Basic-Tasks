//eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addbook } from '../Slice/bookSlice';

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addbook({ id:Date.now() , title, author }));
    navigate('/books');
  };

  return (
  <div className="container  mt-4 my-4 ">
    <div className="row justify-content-center ">
     <div className="col-md-6">
       <div className="card p-5  shadow">
          <h2  className="text-center mb-4">Add A New Book </h2>
          <form onSubmit={handleSubmit}>
          <div className="mb-3">
          <label htmlFor="Title" className='form-label'>Book Title</label>
          <input type="text"  id="bookTitle" className="form-control"  value={title} onChange={(e) => setTitle(e.target.value)} placeholder=" Enter Book Title" />
        </div>

          <div className="mb-3">
          <label htmlFor="authorName" className='form-label'>Author</label>
          <input  type="text" id="authorName" className="form-control" value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="Enter Author Name" />
          </div>

          <div className="d-grid">
          <button type="submit" className="btn btn-primary" >Add Book</button>
          </div>

      </form>
    </div>
    </div>
    </div>
  </div>
      

  );
};

export default AddBook;