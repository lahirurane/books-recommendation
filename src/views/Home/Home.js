import React, { Component, lazy, Suspense } from 'react';

import { Col, Row } from 'reactstrap';
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
class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row className="py-5">
          <h2 className="center">E - Books Recommendation</h2>
        </Row>
        <Row className="pb-5">
          <h5 className="center">Popular Books</h5>
        </Row>
        <BookList books={books} />
      </div>
    );
  }
}

export default Home;
