import React, { Component } from "react";
import Registration from "../auth/Registration";
import Login from "../auth/Login";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.handleSuccessLoginSys = this.handleSuccessLoginSys.bind(this);
  }

  handleSuccessLoginSys(data) {
    // TODO Update parent Component
    this.props.handleLogin(data);
    this.props.history.push("/dashboard");
  }

  render() {
    return (
      <div>
        <h1>Home</h1>
        <h1>Status: {this.props.loggedInStatus}</h1>
        <Registration />
        <Login handleSuccessLoginSys={this.handleSuccessLoginSys} />
      </div>
    );
  }
}

export default Home;
