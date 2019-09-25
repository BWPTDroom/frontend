import React, { Component } from "react";
import axios from "axios";
import axiosWithAuth from "../utils/axiosWithAuth.js";

class Login extends Component {
  state = {
    credentials: {
      username: "",
      password: ""
    }
  };
  handleChange = e => {
    this.setState({
      ...this.state.credentials,
      [e.target.name]: e.target.value
    });
  };
  login = e => {
    e.preventDefault();
    axiosWithAuth().post('/login', this.state.credentials).then(res=>{
           console.log(res)
    })
    .catch(err=>console.log(err))
  };
  render() {
    return (
      <>
        <form onSubmit ={this.login}>
          <input type="text" name="username" onChange={this.handleChange} />
          <input type="password" name = "password" onChange={this.handleChange}/>
          <button>Login</button>
        </form>
      </>
    );
  }
}

export default Login;
