import React, { Component, lazy, Suspense } from 'react';

import { Col, Row } from 'reactstrap';
import BookList from '../Common/BookList';

const books = require('../../assets/data/books.json');

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    if (localStorage.recommendation_login && localStorage.recommendation_login !== '') {
      window.location.href = '#/user/user-home';
    }
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
