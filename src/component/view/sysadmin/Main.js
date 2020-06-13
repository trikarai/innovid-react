import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import NavBar from "./NavBar";

import Incubator from "./incubator/Incubator";
import Profile from "./profile/Profile";
import Admin from "./admin/Admin";

export default class Main extends Component {
  render() {
    return (
      <div className="Container">
          <NavBar />
          <Switch>
            <Route path="/sysadmin/admin" render={() => <Admin />}></Route>
            <Route path="/sysadmin/profile" render={() => <Profile />}></Route>
            <Route
              path="/sysadmin/incubator"
              render={() => <Incubator />}
            ></Route>
          </Switch>
      </div>
    );
  }
}
