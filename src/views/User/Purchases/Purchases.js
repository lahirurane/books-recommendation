import React, { Component } from 'react';
import { Button, Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import BookList from '../../Common/BookList';

const books = require('../../../assets/data/books.json');

class Purchases extends Component {
  componentDidMount() {
    if (!localStorage.recommendation_login) {
      window.location.href = '#/';
    }
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <h1 className="py-5">Purchases</h1>
        </Row>
        <BookList books={books} />
      </div>
    );
  }
}

export default Purchases;
