import React, { Component } from 'react';
import { Button, Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import BookList from '../Common/BookList';

const imgURL =
  'https://images.squarespace-cdn.com/content/v1/513a230ae4b0f3422dd7d5ad/1528073552782-EFTSTXIV94Q678Q1ER20/ke17ZwdGBToddI8pDm48kJme_vyRngthM-lqQfhlIH1Zw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVHdR4tGE0fFJHT7ppaMbI8l68Pv4V3IjdRIUtf6KN3cEolyXOhr1HlgtlqrKgcoGR0/premade-dog-zombie-apocalypse-survivor-indie-e-book-cover-design.jpg?format=300w';
const books = [
  {
    name: 'Book Name',
    src: imgURL
  },
  {
    name: 'Book Name',
    src: imgURL
  },
  {
    name: 'Book Name',
    src: imgURL
  },
  {
    name: 'Book Name',
    src: imgURL
  },
  {
    name: 'Book Name',
    src: imgURL
  },
  {
    name: 'Book Name',
    src: imgURL
  },
  {
    name: 'Book Name',
    src: imgURL
  },
  {
    name: 'Book Name',
    src: imgURL
  },
  {
    name: 'Book Name',
    src: imgURL
  }
];

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
