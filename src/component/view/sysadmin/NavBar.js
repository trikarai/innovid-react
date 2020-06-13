import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import { withRouter } from "react-router-dom";

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.logoutHandler = this.logoutHandler.bind(this);
  }

  logoutHandler() {
    window.localStorage.clear();
    this.props.history.replace("/");
  }

  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>
          <img
            src="/logo192.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />{" "}
          Sys Admin
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <NavLink className="d-inline p-2 dbg-dark" to="/sysadmin/admin">
              Admin
            </NavLink>
            <NavLink className="d-inline p-2 dbg-dark" to="/sysadmin/profile">
              Profile
            </NavLink>
            <NavLink className="d-inline p-2 dbg-dark" to="/sysadmin/incubator">
              Incubator
            </NavLink>
          </Nav>
          <Nav>
            <Nav.Link onClick={this.logoutHandler}>Logout</Nav.Link>
            {/* <NavLink to="/">Logout</NavLink> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
export default withRouter(NavBar);
