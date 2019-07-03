import React, { Component } from "react";
import { Route, Link, Redirect, withRouter } from "react-router-dom"
import GoogleLogin from 'react-google-login';
import { PostData } from "../pages/PostData";
import { login } from './UserFunctions';
import Profile from './Profile'
import "./Loginform.css"

// Material UI Imports
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

class Loginform extends Component {
  constructor() {

    super();
    this.state = {
      email: '',
      password: '',
      loginError: false,
      redirect: false,
      render: false
    };

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)

  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault()

    const user = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password
    }

    login(user).then(res => {
      if (res) {
        this.setState({ render: true })
      } else {
        this.setState({ redirect: false })
      }
    })
  }

  signup(res, type) {
    let postData;

    if (type === 'google' && res.w3.U3) {
      postData = {
        name: res.w3.ig,
        provider: type,
        email: res.w3.U3,
        provider_id: res.El,
        token: res.Zi.access_token,
        provider_pic: res.w3.Paa
      };
    }

    if (postData) {
      PostData('signup', postData).then((result) => {
        let responseJson = result;
        sessionStorage.setItem("userData", JSON.stringify(responseJson));
        this.setState({ redirect: true });
      });
    } else { }
  }

  render() {

    if (this.state.redirect || sessionStorage.getItem('userData') || this.state.render) {
      return (<Redirect to={'/searchitem'} />)
    }
    const responseGoogle = (response) => {
      console.log(response);
      this.signup(response, 'google')
    }
    return (
      <Container component="main" maxWidth="xs" className="wrapper">
        <CssBaseline />
        <div>
          <Typography component="h1" variant="h4">
            Login
        </Typography>
          <form onSubmit={this.onSubmit} className="form-wrapper" noValidate>
            <TextField
              onChange={this.onChange}
              value={this.state.username}
              label="username"
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              name="username"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={this.state.email}
              onChange={this.onChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={this.state.password}
              onChange={this.onChange}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              className="register"
            >
              Login
          </Button>
            <GoogleLogin
              clientId="972112242986-chls7kd871dadf311gfa8539moa9ggv1.apps.googleusercontent.com"
              buttonText="Login"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={'single_host_origin'}
            />
          </form>
        </div>
      </Container>
    )
  }
}

export default Loginform