import React, { Component } from "react";

import NavBar from "./NavBar";

export default class Landing extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="container mt-3">
          <h2>
            Can you effectively track & manage all innovation innitiatives
            inside your organization?
          </h2>
          <p>
            Innov.ID is an innovation management system. By leveraging this
            solution, organization (enterprise, incubators, accelerators, etc)
            can easily track progress and issues of each innovation innitiatives
            being concurrently conducted by different innovator teams, and
            finally decide the right support for each of them.
          </p>
        </div>
      </div>
    );
  }
}
