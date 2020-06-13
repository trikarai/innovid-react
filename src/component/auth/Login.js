import React, { Component } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

import Collapse from "react-bootstrap/Collapse";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Card from "react-bootstrap/Card";
import { withRouter } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      incubatorIdentifier: "",
      email: "",
      password: "",
      loginError: "",
      isError: false,
      isLoad: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSuccessLoginSys = this.handleSuccessLoginSys.bind(this);
    this.handleError = this.handleError.bind(this);
  }

  handleSubmit(event) {
    // console.log("form submitted");
    this.setState({
      registrationError: "",
      isError: false
    });
    const { incubatorIdentifier, email, password } = this.state;
    axios
      .post("http://localhost/bara-inovasi/public/api/sys-admin-login", {
        incubatorIdentifier: incubatorIdentifier,
        email: email,
        password: password
      })
      .then(res => {
        // console.log("registration res", res);
        this.handleSuccessLoginSys(res.data);
      })
      .catch(error => {
        // console.log("registration error", error);
        if (error.response) {
          this.handleError(error);
        }
      })
      .finally();
    event.preventDefault();
  }
  handleError(error) {
    // console.log("handle registration error", error);
    this.setState({
      loginError: error.response.data.meta.error_detail,
      isError: true,
      isLoad: false
    });
  }
  handleChange(event) {
    console.log("event change");
    this.setState({
      [event.target.name]: event.target.value
    });
    event.preventDefault();
  }
  handleSuccessLoginSys(data) {
    window.localStorage.setItem("User", JSON.stringify(data));
    this.props.history.push("/sysadmin");
  }

  render() {
    return (
      <Container fluid>
        <Collapse in={this.state.isError}>
          <Row className="justify-content-md-center mt-3">
            <Col md="6" className="text-center">
              <Alert show={this.state.isError} variant="danger">
                {this.state.loginError}
              </Alert>
            </Col>
          </Row>
        </Collapse>
        <Row className="justify-content-md-center mt-3">
          <Col md="4">
            <Card bg="light" border="primary" className="text-center">
              <Card.Header>Administrator Login</Card.Header>
              <Card.Body>
                <Form onSubmit={this.handleSubmit}>
                  <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      autoComplete="email"
                      name="email"
                      onChange={this.handleChange}
                      value={this.state.email}
                      type="email"
                      placeholder="Enter email"
                      required
                    />
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      autoComplete="current-password"
                      name="password"
                      placeholder="password"
                      value={this.state.password}
                      onChange={this.handleChange}
                      required
                    />
                  </Form.Group>

                  <Button
                    disabled={this.state.IsLoad}
                    className="mb-3"
                    type="submit"
                  >
                    Login
                  </Button>
                  {/* <ProgressBar animated={this.state.IsLoad} now="100" /> */}
                </Form>
              </Card.Body>
            </Card>
          </Col>
          <Col md="12"></Col>
        </Row>
        <Row></Row>
      </Container>
    );
  }
}
export default withRouter(Login);
