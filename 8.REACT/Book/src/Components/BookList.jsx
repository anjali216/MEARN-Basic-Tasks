//import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteBook } from '../Slice/bookSlice';
import { Button, Container, Row, Col, Table } from 'react-bootstrap';

const BookList = () => {
  const books = useSelector((state) => state.bookSlice.books);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteBook(id));
  };

  return (
    <Container className='my-5'>
      <Row className="mb-4">
        <Col>
          <h2 className='text-center my-3'>Book List</h2>
          <div className="text-center my-3">
            <Link to="/add-book">
              <Button variant="primary">Add New Book</Button>
            </Link>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>ISL No</th>
                <th>Book Name</th>
                <th>Author Name</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {books.map((book, index) => (
                <tr key={book.id}>
                  <td>{index + 1}</td>
                  <td>{book.title}</td>
                  <td>{book.author}</td>
                  <td>
                    <Link  to={`/edit-book/${book.id}`}>
                      <Button  variant="info">Edit</Button>
                    </Link>
                  </td>
                  <td>
                    <Button style={{backgroundColor:'red'}} variant="danger" onClick={() => handleDelete(book.id)}>Delete</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default BookList;