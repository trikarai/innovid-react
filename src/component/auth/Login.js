import React, { Component } from "react";
import axios from "axios";
export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      incubatorIdentifier: "",
      email: "",
      password: "",
      loginError: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleError = this.handleError.bind(this);
  }

  handleSubmit(event) {
    // console.log("form submitted");
    this.setState({
      registrationError: ""
    });
    const { incubatorIdentifier, email, password } = this.state;
    axios
      .post("http://localhost/bara-inovasi/public/api/sys-admin-login", {
        incubatorIdentifier: incubatorIdentifier,
        email: email,
        password: password
      })
      .then(res => {
        console.log("registration res", res);
        this.props.handleSuccessLoginSys(res.data);
      })
      .catch(error => {
        // console.log("registration error", error);
        this.handleError(error);
      })
      .finally();
    event.preventDefault();
  }
  handleError(error) {
    // console.log("handle registration error", error);
    this.setState({
      loginError: error.response.data.meta.error_detail
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
      <div>
        <form onSubmit={this.handleSubmit}>
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
            type="email"
            name="email"
            placeholder="email"
            value={this.state.email}
            onChange={this.handleChange}
            required
          ></input>
          <br />
          <input
            type="password"
            name="password"
            placeholder="password"
            value={this.state.password}
            onChange={this.handleChange}
            required
          ></input>
          <br />
          <button type="submit">Login</button>
        </form>
        <div>{this.state.loginError}</div>
      </div>
    );
  }
}
