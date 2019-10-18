import React, { Component } from 'react';
import { TabContent, TabPane, Col, Row, Nav, NavItem, NavLink } from 'reactstrap';
import BookList from '../../Common/BookList';
import axios from 'axios';

class UserHome extends Component {
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
    if (!localStorage.recommendation_login) {
      window.location.href = '#/';
    }
    this.getBookList(1);
  }

  getBookList(id) {
    this.setState({ isLoading: true });
    axios
      .get(`/api/books/getRecomUser/${id}`)
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
            <div class="spinner-border text-primary" role="status">
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
          <h1>My Page</h1>
        </Row>
        <Row className="pb-5">
          <h5 className="center">Books Recommendations for you</h5>
        </Row>
        {content}
      </div>
    );
  }
}

export default UserHome;
