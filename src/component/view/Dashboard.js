import React from "react";

const Dashboard = props => {
  return (
    <div>
      <h1>Dashboard</h1>
      <h1>Status: {props.loggedInStatus}</h1>
      <p>{props.user}</p>
    </div>
  );
};

export default Dashboard;
