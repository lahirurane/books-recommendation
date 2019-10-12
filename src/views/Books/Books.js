import React, { Component } from 'react';
import { Button, Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import BookList from '../Common/BookList';

const books = require('../../assets/data/books.json');

class Books extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <h1>Books</h1>
        </Row>
        <Row className="pb-5">
          <h5 className="center">All Books</h5>
        </Row>
        <BookList books={books} />
      </div>
    );
  }
}

export default Books;
