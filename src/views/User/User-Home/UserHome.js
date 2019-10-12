import React, { Component } from 'react';
import { TabContent, TabPane, Col, Row, Nav, NavItem, NavLink } from 'reactstrap';
import BookList from '../../Common/BookList';

const books = require('../../../assets/data/books.json');

class UserHome extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: new Array(4).fill('1')
    };
  }

  componentDidMount() {
    if (!localStorage.recommendation_login) {
      window.location.href = '#/';
    }
  }

  lorem() {
    return 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.';
  }

  toggle(tabPane, tab) {
    const newArray = this.state.activeTab.slice();
    newArray[tabPane] = tab;
    this.setState({
      activeTab: newArray
    });
  }

  tabPane() {
    return (
      <>
        <TabPane tabId="1">{`1. ${this.lorem()}`}</TabPane>
        <TabPane tabId="2">{`2. ${this.lorem()}`}</TabPane>
        <TabPane tabId="3">{`3. ${this.lorem()}`}</TabPane>
      </>
    );
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row className="py-5">
          <h1>My Page</h1>
        </Row>
        <Row className="pb-5">
          <h5 className="center">Books Recommendations for you</h5>
        </Row>
        <BookList books={books} />
        {/* <Row>
          <Nav tabs>
            <NavItem>
              <NavLink
                active={this.state.activeTab[0] === '1'}
                onClick={() => {
                  this.toggle(0, '1');
                }}
              >
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                active={this.state.activeTab[0] === '2'}
                onClick={() => {
                  this.toggle(0, '2');
                }}
              >
                Profile
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                active={this.state.activeTab[0] === '3'}
                onClick={() => {
                  this.toggle(0, '3');
                }}
              >
                Messages
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={this.state.activeTab[0]}>{this.tabPane()}</TabContent>
        </Row> */}
      </div>
    );
  }
}

export default UserHome;
