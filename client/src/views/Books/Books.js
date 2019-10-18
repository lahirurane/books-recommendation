import React, { Component } from 'react';
import { Button, Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import BookList from '../Common/BookList';
import axios from 'axios';
import { Waypoint } from 'react-waypoint';

class Books extends Component {
  constructor(props) {
    super(props);

    this.state = { booklist: [], isLoading: false, hasMore: true, skip: 0, limit: 20 };
    this.getBookList = this.getBookList.bind(this);
    this.fetchDataOnScroll = this.fetchDataOnScroll.bind(this);
  }

  componentDidMount() {
    this.getBookList(0, 20);
  }

  getBookList(skip, limit) {
    this.setState({ isLoading: true });
    axios
      .get(`/api/books/getCategolue/${skip}/${limit}`)
      .then(res => {
        let temp = [...this.state.booklist, ...res.data.data];
        this.setState({ booklist: temp, isLoading: false, hasMore: res.data.hasMore });
      })
      .catch(err => {
        this.setState({ isLoading: false });
        console.log('Error in getting the book list');
      });
  }

  fetchDataOnScroll() {
    if (this.state.booklist.length !== 0 && this.state.hasMore) {
      let skip = this.state.skip + this.state.limit;
      this.setState({ skip: skip });
      this.getBookList(skip, this.state.limit);
    }
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <h1>Books</h1>
        </Row>
        <Row className="pb-5">
          <h5 className="center">All Books</h5>
        </Row>
        <BookList books={this.state.booklist} />
        <Row>
          <Col className="py-5 text-center">
            &nbsp;
            {!this.state.isLoading ? (
              <Button
                style={{ fontSize: '2em' }}
                onClick={() => {
                  this.fetchDataOnScroll();
                }}
              >
                Load More...
              </Button>
            ) : (
              ''
            )}
          </Col>
        </Row>
        {this.state.isLoading ? (
          <Row>
            <Col className="text-center">
              <div class="spinner-border text-primary" role="status">
                <span class="sr-only">Loading...</span>
              </div>
            </Col>
          </Row>
        ) : (
          ''
        )}
      </div>
    );
  }
}

export default Books;
