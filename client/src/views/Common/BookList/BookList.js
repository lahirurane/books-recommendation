import React, { Component, lazy, Suspense } from 'react';

import { Col, Row } from 'reactstrap';

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
            width: '100%',
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}
        >
          {bookList.map((item, index) => {
            return (
              <a
                style={{ fontWeight: 700, color: '#0c2461' }}
                key={item.data_id}
                href={'#/books/details?id=' + item.data_id}
                className="col-xs-4 col-sm-4 col-md-3 col-lg-2 py-2"
              >
                <Row className="px-2">
                  <img style={{ width: '20em', height: '25em' }} src={item.image_url}></img>
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
