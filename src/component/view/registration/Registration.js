import React, { Component } from "react";
import axios from "axios";

import Form from "react-bootstrap/Form";

export default class Registration extends Component {
  constructor(props) {
    super(props);

    this.state = {
      incubatorIdentifier: "",
      name: "",
      email: "",
      password: "",
      cpassword: "",
      registrationError: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleErrorReg = this.handleErrorReg.bind(this);
  }

  handleSubmit(event) {
    // console.log("form submitted");
    this.setState({
      registrationError: ""
    });
    const { incubatorIdentifier, name, email, password } = this.state;
    axios
      .post("http://localhost/bara-inovasi/public/api/founder-signup", {
        incubatorIdentifier: incubatorIdentifier,
        name: name,
        email: email,
        password: password
      })
      .then(res => {
        console.log("registration res", res);
        this.props.handleSuccessReg(res.data);
      })
      .catch(error => {
        // console.log("registration error", error);
        this.handleErrorReg(error);
      })
      .finally();
    event.preventDefault();
  }
  handleErrorReg(error) {
    // console.log("handle registration error", error);
    this.setState({
      registrationError: error.response.data.meta.error_detail
    });
  }
  handleChange(event) {
    console.log("event change");
    this.setState({
      [event.target.name]: event.target.value
    });
    event.preventDefault();
  }

  render() {
    return (
      <div className="container">
        <Form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="incubatorIdentifier"
            placeholder="incubatorIdentifier"
            value={this.state.incubatorIdentifier}
            onChange={this.handleChange}
            required
          ></input>{" "}
          <br />
          <input
            type="text"
            name="name"
            placeholder="name"
            value={this.state.name}
            onChange={this.handleChange}
            required
          ></input>
          <br />
          <input
            type="email"
            name="email"
            autoComplete="email"
            placeholder="email"
            value={this.state.email}
            onChange={this.handleChange}
            required
          ></input>
          <br />
          <input
            type="password"
            autoComplete="current-password"
            name="password"
            placeholder="password"
            value={this.state.password}
            onChange={this.handleChange}
            required
          ></input>
          <br />
          {/* <input
            type="password"
            name="cpassword"
            placeholder="password confirmation"
            value={this.state.cpassword}
            onChange={this.handleChange}
            required
          ></input> */}
          <br />
          <button type="submit">Regist</button>
        </Form>
        <div>{this.state.registrationError}</div>
      </div>
    );
  }
}
