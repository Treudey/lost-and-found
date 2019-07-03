import React, { Component } from "react";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import "./Loginform.css"

class signup extends Component{
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
      <Container component="main" maxWidth="xs">
      <CssBaseline />
    <div className="wrapper">
      <div className="form-wrapper">
        <h1>Sign Up</h1>
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
            <button type="submit">Sign up</button>
          </div>
        </form>
      </div>
    </div>
    </Container>
    )
}
}

export default signup


