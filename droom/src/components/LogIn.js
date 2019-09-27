import React, { Component } from "react";
import axios from "axios";
// import axiosWithAuth from "../utils/axiosWithAuth.js";

class Login extends Component {
  state = {
    username: "",
    password: ""
  };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  login = e => {
    console.log(this.state);
    e.preventDefault();
    axios
      .post("https://droomapi.herokuapp.com/api/auth/login", this.state)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };
  render() {
    return (
      <>
        <form onSubmit={this.login}>
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
          />
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <button>Login</button>
        </form>
      </>
    );
  }
}

export default Login;
