import React, { Component } from 'react';

class Delete extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Welcome back @' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <p> PLEASE ENTER ACCOUNT INFORMATION TO DELETE </p>
        <label>
          Username:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
          Password:
          <input type="password" />
        </label>
        <input type="submit" value="DELETE user [must DELETE + go loggedout page]" />
      </form>
    );
  }
}

export default Delete