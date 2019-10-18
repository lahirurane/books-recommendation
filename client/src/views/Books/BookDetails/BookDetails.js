import React, { Component } from 'react';
import { Button, Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import StarRatings from 'react-star-ratings';
import axios from 'axios';
import BookList from '../../Common/BookList';

const books = require('../../../assets/data/books.json');

class BookDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      booksData: {},
      rating: 0,
      booklist: [],
      isDetailLoading: true,
      isRecommendationLoading: true
    };
    this.changeRating = this.changeRating.bind(this);
    this.getBookList = this.getBookList.bind(this);
    this.onBuyClick = this.onBuyClick.bind(this);
  }

  componentDidMount() {
    const id = Number(this.props.location.search.replace('?id=', ''));

    if (id) {
      this.setState({ book_id: id });
      this.getBookList(id);
      this.getBookDetails(id);
    } else {
      alert('Opps, something went wrong. Please go back');
      window.location.href = '#/';
    }
  }

  componentDidUpdate(prev) {
    if (prev !== this.props) {
      const id = Number(this.props.location.search.replace('?id=', ''));

      if (id) {
        this.setState({ book_id: id });
        this.getBookList(id);
        this.getBookDetails(id);
      } else {
        alert('Opps, something went wrong. Please go back');
        window.location.href = '#/';
      }
    }
  }

  changeRating(newRating, name) {
    this.setState({
      rating: newRating
    });
    this.insertRating(this.state.book_id, 1, newRating);
  }

  getBookList(id) {
    this.setState({ isRecommendationLoading: true });
    axios
      .get(`/api/books/getRecomBook/${id}`)
      .then(res => {
        this.setState({ booklist: res.data.data, isRecommendationLoading: false });
      })
      .catch(err => {
        this.setState({ isRecommendationLoading: false });
        console.log('Error in getting the book list');
      });
  }

  getBookDetails(id) {
    this.setState({ isDetailLoading: true });
    axios
      .get(`/api/books/getBooksForID/${id}`)
      .then(res => {
        // console.log('res', res.data.data[0]);
        this.setState({
          bookData: res.data.data[0],
          isBought: res.data.isBought,
          rating: res.data.rating,
          isDetailLoading: false
        });
      })
      .catch(err => {
        this.setState({ isDetailLoading: false });
        console.log('Error in getting the book list');
      });
  }

  onBuyClick() {
    if (!this.state.isBought) {
      this.setState({ isDetailLoading: true });
      axios
        .get(`/api/users/purchase/${1}/${this.state.bookData._id}`)
        .then(res => {
          this.setState({ isBought: true, isDetailLoading: false });
        })
        .catch(err => {
          this.setState({ isDetailLoading: false });
          console.log('Error in getting the book list');
        });
    }
  }

  insertRating(id, userid, rating) {
    axios
      .get(`/api/books/setRating/${id}/${userid}/${rating}`)
      .then(res => {
        // console.log('res', res.data.data[0]);
      })
      .catch(err => {
        console.log('Error in saving the rating');
      });
  }

  render() {
    const { bookData } = this.state;

    let similarBooksContent = '';

    if (this.state.isRecommendationLoading) {
      similarBooksContent = (
        <Row>
          <Col className="text-center">
            <div class="spinner-border text-primary" role="status">
              <span class="sr-only">Loading...</span>
            </div>
          </Col>
        </Row>
      );
    } else {
      similarBooksContent = (
        <Row>
          <Col className="mx-4">
            <BookList books={this.state.booklist} />
          </Col>
        </Row>
      );
    }

    return (
      <div className="animated fadeIn">
        <Row>
          <h1 className="pb-5">Book Details</h1>
        </Row>
        {bookData && bookData.book_id ? (
          <Row>
            <Col md="3" sm="4" xs="4">
              <img style={{ width: '80%', height: 'auto' }} src={bookData.image_url}></img>
            </Col>
            <Col className="p-5" md="6">
              <Row className="pb-5">
                <h2>{bookData.title}</h2>
              </Row>
              <Row>
                <h4>Authors : </h4>
                <h4>{bookData.authors}</h4>
              </Row>
              <Row>
                <h4>Publication Year : </h4>
                <h4>{bookData.original_publication_year}</h4>
              </Row>
              <Row className="pb-5">
                <h4>ISBN: </h4>
                <h4>{bookData.isbn}</h4>
              </Row>
              <Row>
                <Col md="6">
                  {' '}
                  <StarRatings
                    rating={this.state.rating}
                    starRatedColor="blue"
                    changeRating={this.changeRating}
                    numberOfStars={5}
                    name="rating"
                    starDimension="30px"
                  />
                </Col>
                <Col md="6">
                  <Button
                    type="button"
                    className="btn btn-warning"
                    style={{ fontSize: '2em', maxWidth: '5em', width: '5em' }}
                    onClick={() => {
                      this.onBuyClick();
                    }}
                    disabled={this.state.isBought}
                  >
                    Buy
                  </Button>
                </Col>
              </Row>
              <Row className="text-center">
                <Col md="4">
                  {' '}
                  <span>Rating : {this.state.rating === 0 ? 'N/A' : this.state.rating}</span>
                </Col>
                <Col md="8">
                  <span>&nbsp;</span>
                </Col>
              </Row>
            </Col>
          </Row>
        ) : (
          ''
        )}
        {this.state.isDetailLoading ? (
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
        <Row className="mt-2 p-5">
          <Col md="12">
            <hr />
            <Row>
              <h5>Similar books</h5>
            </Row>
            {similarBooksContent}
          </Col>
        </Row>
      </div>
    );
  }
}

export default BookDetails;
