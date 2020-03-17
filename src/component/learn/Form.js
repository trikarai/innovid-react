import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      comment: "",
      topic: "react"
    };
  }
  handlerUsernameChange = event => {
    this.setState({
      username: event.target.value
    });
  };
  handlerCommentChange = event => {
    this.setState({
      comment: event.target.value
    });
  };
  handlerSelectChange = event => {
    this.setState({
      topic: event.target.value
    });
  };
  handlerSubmit = event => {
    alert(`${this.state.username}`);
    event.preventDefault();
  };
  render() {
    const { username, comment, topic} = this.state
    return (
      <form onSubmit={this.handlerSubmit}>
        <div>
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={this.handlerUsernameChange}
          ></input>
        </div>
        <div>
          <label>Comment</label>
          <textarea
            value={comment}
            onChange={this.handlerCommentChange}
          ></textarea>
        </div>
        <div>
          <label>Framework</label>
          <select value={topic} onChange={this.handlerSelectChange}>
            <option value="vue">Vue</option>
            <option value="react">React</option>
            <option value="angular">Angular</option>
          </select>
        </div>
        <button type="submit">submit</button>
      </form>
    );
  }
}

export default Form;
