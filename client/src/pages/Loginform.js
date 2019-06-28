import React, { Component } from "react";
import "./Loginform.css"

class loginform extends Component{
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      password: null,
    };
  }

  handleSubmit = e => {
    e.preventDefault();
  };

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
  };

  render() {

    return(
    <div className="wrapper">
      <div className="form-wrapper">
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit} noValidate>
          <div className="email">
            <label htmlFor="email">Email</label>
            <input 
            type="text" 
            className="" 
            placeholder="email" 
            name="email"
            noValidate
            onChange={this.handleChange}
            />
          </div>

          <div className="password">
            <label htmlFor="password">Password</label>
            <input 
            type="text" 
            className="" 
            placeholder="password" 
            name="password"
            noValidate
            onChange={this.handleChange}
            />
          </div>
          <div className="register">
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    </div>
    )
}
}

export default loginform

