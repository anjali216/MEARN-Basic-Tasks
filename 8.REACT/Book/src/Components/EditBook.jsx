import  { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editBook } from '../Slice/bookSlice';
import { useNavigate, useParams } from 'react-router-dom';
import { Container, Form, Button } from 'react-bootstrap';

const EditBook = () => {
  const { id } = useParams();
  const books = useSelector((state) => state.bookSlice.books);
  const bookToEdit = books.find((book) => book.id === id);
  const [title, setTitle] = useState(bookToEdit.title);
  const [author, setAuthor] = useState(bookToEdit.author);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editBook({ id, title, author }));
    navigate('/books');
  };

  return (
    <Container className="mt-4">
      <h2>Edit Book</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formTitle">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" value={title} onChange={(e) => setTitle(e.target.value)}  
        placeholder="Enter book title" />
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="formAuthor">
          <Form.Label>Author</Form.Label>
          <Form.Control  type="text"  value={author} onChange={(e) => setAuthor(e.target.value)} 
          placeholder="Enter author name" />
        </Form.Group>
        
        <Button variant="primary" type="submit">
          Edit Book
        </Button>
      </Form>
    </Container>
  );
};

export default EditBook;