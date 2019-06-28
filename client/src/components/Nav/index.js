import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import "./style.css";

export default function Navbar(props) {

  function LoginAndSignup() {
    return (
      <div>
        <Button href="/signup" size="large" color="inherit">Sign Up</Button>
        <Button href="/login" size="large" color="inherit">Login</Button>
      </div>
    );
  }

  function ProfileButton() {
    return ( <IconButton href="/profile/:id" size="large" color="inherit"><Icon>account_circle</Icon></IconButton> );
  }

  function RenderedUserButtons() {
    if (props.isLoggedIn) {
      return <ProfileButton />;
    } else {
      return <LoginAndSignup />;
    }
  }

  return (
    <div className="root">
      <AppBar id="nav" position="static">
        <Toolbar>
          <div className="title">
            <a href="/" className="home-link">
              <Typography variant="h5" >
                Finders Keepers
              </Typography>
            </a>
          </div>
          <Button href="/searchitem" size="large" color="inherit">Search</Button>
          <Button href="/postitem" size="large" color="inherit">Post Item</Button>
          <RenderedUserButtons />
        </Toolbar>
      </AppBar>
    </div>
  );
}