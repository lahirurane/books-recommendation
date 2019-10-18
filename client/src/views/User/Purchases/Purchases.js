import React, { Component } from 'react';
import { Button, Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import axios from 'axios';
import BookList from '../../Common/BookList';

class Purchases extends Component {
  constructor(props) {
    super(props);

    this.state = { booklist: [], isLoading: false };
    this.getUserPurchases = this.getUserPurchases.bind(this);
  }

  componentDidMount() {
    if (!localStorage.recommendation_login) {
      window.location.href = '#/';
    }

    this.getUserPurchases();
  }

  getUserPurchases() {
    this.setState({ isLoading: true });
    axios
      .get(`/api/users/getpurchase/${1}`)
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
          <h2 className="center">My Purchases</h2>
        </Row>
        {content}
      </div>
    );
  }
}

export default Purchases;
