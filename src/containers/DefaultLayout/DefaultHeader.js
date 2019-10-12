import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import {
  Badge,
  UncontrolledDropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  NavItem
} from 'reactstrap';
import PropTypes from 'prop-types';

import { AppAsideToggler, AppNavbarBrand, AppSidebarToggler } from '@coreui/react';
import logo from '../../assets/img/logo.svg';
import avatar from '../../assets/img/avatar.png';

const propTypes = {
  children: PropTypes.node
};

const defaultProps = {};

class DefaultHeader extends Component {
  render() {
    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        <AppSidebarToggler className="d-lg-none" display="md" mobile />
        <AppNavbarBrand full={{ src: logo, width: 89, height: 25, alt: 'ebooks Logo' }} />
        <AppSidebarToggler className="d-md-down-none" display="lg" />

        <Nav className="ml-auto" navbar>
          {this.props.isLogin ? (
            <UncontrolledDropdown nav direction="down">
              <DropdownToggle nav>
                <img src={avatar} className="img-avatar" alt="user@ebooksrecommendation.com" />
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem onClick={e => this.props.onLogout(e)}>
                  <i className="fa fa-sign-out"></i> Logout
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          ) : (
            <DropdownItem onClick={e => (window.location.href = '#/login')}>
              <i className="fa fa-sign-in"></i> Login
            </DropdownItem>
          )}
        </Nav>
      </React.Fragment>
    );
  }
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

export default DefaultHeader;
