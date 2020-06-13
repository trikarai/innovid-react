import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Card, Form, Button } from "react-bootstrap";

import Icon from "@mdi/react";
import { mdiSyncCircle } from "@mdi/js";

import "./Profile.css";
import axios from "axios";

export default class Profile extends Component {
  constructor(props) {
    super(props);
    let user = JSON.parse(localStorage.getItem("User")).data;

    this.state = {
      name: user.name,
      email: "",
      previousPasssword: "",
      newPassword: "",
      confirmPassword: ""
    };
    this.handlerProfile = this.handlerProfile.bind(this);
    this.handlerPassword = this.handlerPassword.bind(this);
    this.handlerChange = this.handlerChange.bind(this);
    this.handlerChangeConfirm = this.handlerChangeConfirm.bind(this);
    this.getUserData = this.getUserData.bind(this);
  }
  handlerProfile() {}
  handlerPassword() {}
  handlerChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
    event.preventDefault();
  }
  handlerChangeConfirm(event) {
    this.setState({
      confirmPassword: event.target.value
    });
    event.preventDefault();
  }

  getUserData() {
    axios
      .get("http://localhost/")
      .then()
      .catch()
      .finally();
  }

  render() {
    const {
      name,
      email,
      previousPasssword,
      newPassword,
      confirmPassword
    } = this.state;
    return (
      <Container>
        <Row className="mt-3">
          <Col md="6">
            <Card>
              <Card.Header>Profile</Card.Header>
              <Card.Body>
                <Form onSubmit={this.handlerProfile}>
                  <Form.Group>
                    <Form.Control
                      placeholder="Name"
                      name="name"
                      type="text"
                      value={name}
                      onChange={this.handlerChange}
                      required
                    ></Form.Control>
                  </Form.Group>
                  <Form.Group>
                    <Row>
                      <Col md="10">
                        {" "}
                        <Form.Control
                          placeholder="Email"
                          name="email"
                          type="email"
                          value={email}
                          onChange={this.handlerChange}
                          required
                        ></Form.Control>
                      </Col>
                      <Col md="2">
                        {" "}
                        <Button
                          variant="outline-info"
                          className="btn-circle"
                          size="sm"
                          onClick={this.getUserData}
                        >
                          <Icon
                            size={1}
                            spin={false}
                            path={mdiSyncCircle}
                          ></Icon>
                        </Button>
                      </Col>
                    </Row>
                  </Form.Group>
                  <Button className="mb-3" type="submit">
                    Update Profile
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
          <Col md="6">
            <Card>
              <Card.Header>Password</Card.Header>
              <Card.Body>
                <Form onSubmit={this.handlerPassword}>
                  <Form.Group>
                    <Form.Control
                      type="hidden"
                      autoComplete="username"
                      name="username"
                      value={email}
                    ></Form.Control>
                    <Form.Control
                      type="password"
                      autoComplete="current-password"
                      placeholder="current password"
                      onChange={this.handlerChange}
                      name="password"
                      value={previousPasssword}
                      required
                    ></Form.Control>
                  </Form.Group>
                  <Form.Group>
                    <Form.Control
                      type="password"
                      autoComplete="new-password"
                      placeholder=" new password"
                      onChange={this.handlerChange}
                      name="newpassword"
                      value={newPassword}
                      required
                    ></Form.Control>
                  </Form.Group>
                  <Form.Group>
                    <Form.Control
                      type="password"
                      autoComplete="confirm-password"
                      placeholder="confirm new password"
                      name="confirmpassword"
                      value={confirmPassword}
                      onChange={this.handlerChangeConfirm}
                      required
                    ></Form.Control>
                  </Form.Group>
                  <Button type="submit">Change</Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}
