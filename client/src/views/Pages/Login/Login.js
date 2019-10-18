import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  Card,
  CardBody,
  CardGroup,
  Col,
  Container,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Row
} from 'reactstrap';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      errors: {}
    };

    this.handleOnchange = this.handleOnchange.bind(this);
    this.submitLogin = this.submitLogin.bind(this);
  }

  componentDidMount() {
    if (localStorage.recommendation_login && localStorage.recommendation_login !== '') {
      window.location.href = '#/user/user-home';
    }
  }

  handleOnchange(event) {
    this.setState({ [event.target.name]: event.target.value, errors: {} });
  }

  submitLogin() {
    if (this.validateInput()) {
      const data = {
        username: this.state.username,
        password: this.state.password
      };
      localStorage.setItem('recommendation_login', JSON.stringify(data));
      window.location.href = '#/user/user-home';
    }
  }

  validateInput() {
    let isValid = true;
    const errors = {};

    if (this.state.username === '') {
      isValid = false;
      errors.username = 'Cannot be empty';
    }

    if (this.state.username !== 'user1') {
      isValid = false;
      errors.username = 'User Not Found';
    }

    if (this.state.password === '') {
      isValid = false;
      errors.password = 'Cannot be empty';
    }

    this.setState({ errors: errors });
    return isValid;
  }

  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <Form>
                      <h1>Login</h1>
                      <p className="text-muted">Sign In to your account</p>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          type="text"
                          name="username"
                          placeholder="Username"
                          autoComplete="username"
                          onChange={this.handleOnchange}
                          className={
                            this.state.errors.username && this.state.errors.username !== ''
                              ? 'form-control is-invalid'
                              : 'form-control'
                          }
                        />
                        {this.state.errors.username && (
                          <div className="col-md-12 col-xs-12 invalid-feedback error-message">
                            {this.state.errors.username}
                          </div>
                        )}
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          type="password"
                          name="password"
                          placeholder="Password"
                          autoComplete="current-password"
                          onChange={this.handleOnchange}
                          className={
                            this.state.errors.password && this.state.errors.password !== ''
                              ? 'form-control is-invalid'
                              : 'form-control'
                          }
                        />
                        {this.state.errors.password && (
                          <div className="col-md-12 col-xs-12 invalid-feedback error-message">
                            {this.state.errors.password}
                          </div>
                        )}
                      </InputGroup>
                      <Row>
                        <Col xs="6">
                          <Button color="primary" onClick={this.submitLogin} className="px-4">
                            Login
                          </Button>
                        </Col>
                        {/* <Col xs="6" className="text-right">
                          <Button color="link" className="px-0">
                            Forgot password?
                          </Button>
                        </Col> */}
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
                <Card
                  className="text-white bg-primary py-5 d-md-down-none"
                  style={{ width: '44%' }}
                >
                  <CardBody className="text-center">
                    <div>
                      <h2 className="pb-5">Sign up</h2>
                      {/* <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua.
                      </p> */}
                      <Link to="/register">
                        <Button color="primary" className="mt-3" active tabIndex={-1}>
                          Register Now!
                        </Button>
                      </Link>
                    </div>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Login;
