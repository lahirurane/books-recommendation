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
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}
        >
          {bookList.map((item, index) => {
            return (
              <a
                href={'#/books/details?id=' + index}
                className="col-xs-4 col-sm-4 col-md-3 col-lg-2"
              >
                <Row className="px-2">
                  <img style={{ width: '100%', height: '100%' }} src={item.src}></img>
                </Row>
                <Row className="text-center">
                  <span className="col-md-12 py-2"> {item.name + ' ' + index}</span>
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
