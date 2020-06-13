import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";

import Landing from "./component/view/landing/Landing";
import Registration from "./component/view/registration/Registration"
import Login from "./component/auth/Login";

import SysAdmin from "./component/view/sysadmin/Main"

// import Home from "./component/view/Home";
// import Dashboard from "./component/view/Dashboard";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedInStatus: "NOT_LOGGED_IN",
      user: {}
    };

    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin(data) {
    this.setState({
      loggedInStatus: "LOGGED_IN",
      user: JSON.stringify(data)
    });
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={() => <Landing />}></Route>
          <Route path="/registration" render={() => <Registration />}></Route>
          <Route path="/login" render={() => <Login />}></Route>
          <Route path="/sysadmin" render={() => <SysAdmin />}></Route>
        </Switch>
      </BrowserRouter>
      //   <h1> Hello </h1>
      //   <Button variant="primary">bootstrap button</Button>
      //   <BrowserRouter>
      //     <Switch>
      //       <Route
      //         exact
      //         path={"/"}
      //         render={props => (
      //           <Home
      //             {...props}
      //             handleLogin={this.handleLogin}
      //             loggedInStatus={this.state.loggedInStatus}
      //           ></Home>
      //         )}
      //       />
      //       <Route
      //         exact
      //         path={"/dashboard"}
      //         render={props => (
      //           <Dashboard
      //             {...props}
      //             loggedInStatus={this.state.loggedInStatus}
      //             user={this.state.user}
      //           ></Dashboard>
      //         )}
      //       />
      //     </Switch>
      //   </BrowserRouter>
      //  </div>
    );
  }
}
