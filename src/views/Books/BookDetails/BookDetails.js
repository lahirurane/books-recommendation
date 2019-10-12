import React, { Component } from 'react';
import { Button, Card, CardBody, CardHeader, Col, Row } from 'reactstrap';

const books = require('../../../assets/data/books.json');

class BookDetails extends Component {
  constructor(props) {
    super(props);

    this.state = { booksData: {} };
  }

  componentDidMount() {
    const id = Number(this.props.location.search.replace('?id=', ''));
    const data = books.find(item => {
      return item.id === id;
    });
    this.setState({ bookData: data });
  }
  render() {
    //     authors: "Stephenie Meyer"
    // average_rating: 3.57
    // best_book_id: 41865
    // book_id: 41865
    // books_count: 226
    // id: 3
    // image_url: "https://images.gr-assets.com/books/1361039443m/41865.jpg"
    // isbn: 316015849
    // isbn13: 9780316015840
    // language_code: "en-US"
    // original_publication_year: 2005
    // original_title: "Twilight"
    // ratings_1: 456191
    // ratings_2: 436802
    // ratings_3: 793319
    // ratings_4: 875073
    // ratings_5: 1355439
    // ratings_count: 3866839
    // small_image_url: "https://images.gr-assets.com/books/1361039443s/41865.jpg"
    // title: "Twilight (Twilight, #1)"
    // work_id: 3212258
    // work_ratings_count: 3916824
    // work_text_reviews_count: 95009
    // __proto__: Object

    const { bookData } = this.state;
    return (
      <div className="animated fadeIn">
        <Row>
          <h1>Book Details</h1>
        </Row>
        {bookData && bookData.id ? (
          <Row>
            <Col md="3" sm="4" xs="4">
              <img style={{ width: '100%', height: 'auto' }} src={bookData.image_url}></img>
            </Col>
            <Col md="6">
              <Row>
                <h4>{bookData.title}</h4>
              </Row>
              <Row>
                <span>Authors : </span>
                <span>{bookData.authors}</span>
              </Row>
              <Row>
                <span>Publication Year : </span>
                <span>{bookData.original_publication_year}</span>
              </Row>
              <Row>
                <span>ISBN: </span>
                <span>{bookData.isbn}</span>
              </Row>
            </Col>
          </Row>
        ) : (
          ''
        )}
      </div>
    );
  }
}

export default BookDetails;
