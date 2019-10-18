import React, { Component, lazy, Suspense } from 'react';
import axios from 'axios';
import { Col, Row } from 'reactstrap';
import BookList from '../Common/BookList';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: new Array(4).fill('1'),
      booklist: [],
      isLoading: false
    };
    this.getBookList = this.getBookList.bind(this);
  }

  componentDidMount() {
    if (localStorage.recommendation_login && localStorage.recommendation_login !== '') {
      window.location.href = '#/user/user-home';
    }
    this.getBookList();
  }

  getBookList() {
    this.setState({ isLoading: true });
    axios
      .get(`/api/books/getPopularItems`)
      .then(res => {
        this.setState({ booklist: res.data.data, isLoading: false });
      })
      .catch(err => {
        this.setState({ isLoading: false });
        console.log('Error in getting the book list');
      });
  }

  render() {
    let content = '';

    if (this.state.isLoading) {
      content = (
        <Row>
          <Col className="text-center">
            <div class="spinner-border text-secondary" role="status">
              <span class="sr-only">Loading...</span>
            </div>
          </Col>
        </Row>
      );
    } else {
      content = (
        <Row>
          <Col className="mx-4">
            <BookList books={this.state.booklist} />
          </Col>
        </Row>
      );
    }
    return (
      <div className="animated fadeIn">
        <Row className="py-5">
          <h2 className="center">E - Books Recommendation</h2>
        </Row>
        <Row className="pb-5">
          <h5 className="center">Popular Books</h5>
        </Row>
        {content}
      </div>
    );
  }
}

export default Home;
