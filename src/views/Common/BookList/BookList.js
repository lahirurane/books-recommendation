import React, { Component, lazy, Suspense } from 'react';

import { Col, Row } from 'reactstrap';

// {
//   "id": 1,
//   "book_id": 2767052,
//   "best_book_id": 2767052,
//   "work_id": 2792775,
//   "books_count": 272,
//   "isbn": 439023483,
//   "isbn13": 9780439023480,
//   "authors": "Suzanne Collins",
//   "original_publication_year": 2008,
//   "original_title": "The Hunger Games",
//   "title": "The Hunger Games (The Hunger Games, #1)",
//   "language_code": "eng",
//   "average_rating": 4.34,
//   "ratings_count": 4780653,
//   "work_ratings_count": 4942365,
//   "work_text_reviews_count": 155254,
//   "ratings_1": 66715,
//   "ratings_2": 127936,
//   "ratings_3": 560092,
//   "ratings_4": 1481305,
//   "ratings_5": 2706317,
//   "image_url": "https://images.gr-assets.com/books/1447303603m/2767052.jpg",
//   "small_image_url": "https://images.gr-assets.com/books/1447303603s/2767052.jpg"
// },
class BookList extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const bookList = this.props.books;
    return (
      <Row>
        <div
          style={{
            display: 'flex',
            height: '100%',
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}
        >
          {bookList.map((item, index) => {
            return (
              <a
                key={item.id}
                href={'#/books/details?id=' + index}
                className="col-xs-4 col-sm-4 col-md-3 col-lg-2 py-2"
              >
                <Row className="px-2">
                  <img style={{ width: '100%', height: '350px' }} src={item.image_url}></img>
                </Row>
                <Row className="text-center">
                  <span className="col-md-12 py-2"> {item.title}</span>
                </Row>
              </a>
            );
          })}
        </div>
      </Row>
    );
  }
}

export default BookList;
