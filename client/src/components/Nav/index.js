import React,{Component} from "react";
import {Route,Link,Redirect,withRouter} from "react-router-dom"

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Linkm from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import "./style.css";

class Navbar extends Component{

  logOut(e){
    e.preventDefault()
    localStorage.removeItem('usertoken')
    this.props.history.push(`/`)
  }

  // function LoginAndSignup() {
  //   return (
  //     <div>
  //       <Linkm
  //       component={Link}
  //       to="/signup" size="large" color="inherit">Sign Up</Linkm>
  //       <Linkm 
  //       component={Link}
  //       to="/login" size="large" color="inherit">Login</Linkm>
  //     </div>
  //   );
  // }

  // function ProfileButton() {
  //   return ( <IconButton href="/profile/:id" size="large" color="inherit"><Icon>account_circle</Icon></IconButton> );
  // }

  // function RenderedUserButtons() {
  //   if (props.isLoggedIn) {
  //     return <ProfileButton />;
  //   } else {
  //     return <LoginAndSignup />;
  //   }
  // }

  render(){
    const loginRegLink = (
      <div>
        <Linkm
          component={Link}
          to="/register" size="large" color="inherit">Sign Up
        </Linkm>
        <Linkm 
        component={Link}
        to="/login" size="large" color="inherit">Login</Linkm>
      </div>
    )

    const userLink = (
      <div>
        <Linkm
          component={Link}
          to="/profile" size="large" color="inherit">User
        </Linkm>
        <Linkm 
        component={Link}
        to="" onClick={this.logOut.bind(this)} size="large" color="inherit">Logout</Linkm>
      </div>
    )

    return (
      <div className="root">
        <AppBar id="nav" position="fixed">
          <Toolbar>
            <div className="title">
              <a href="/" className="home-link">
                <Typography variant="h5" >
                  Finders Keepers
                </Typography>
              </a>
            </div>
            <Linkm
              component={Link}
              to="/searchitem" size="large" color="inherit">Search</Linkm>
            <Button
              component={Link}
              to="/postitem" size="large" color="inherit">Post Item</Button>
            {/* <RenderedUserButtons /> */}

            <div>
              {localStorage.usertoken ? userLink:loginRegLink}
            </div>

            {/* <div>
            <Linkm
            component={Link}
            to="/signup" size="large" color="inherit">Sign Up</Linkm>
            <Linkm 
            component={Link}
            to="/login" size="large" color="inherit">Login</Linkm>
            <Linkm 
            component={Link}
            to="/profile" size="large" color="inherit">Profile</Linkm>
            </div> */}

            

          </Toolbar>
        </AppBar>
      </div>
    )
  };
}

export default withRouter(Navbar)