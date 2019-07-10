import React, { Component } from "react";
import { Route, Link, Redirect, withRouter } from "react-router-dom"

//Material UI
import {
  AppBar, Button, CssBaseline, Divider, Drawer, Hidden, IconButton, List, ListItem, Toolbar, Typography
} from '@material-ui/core'
import Linkm from '@material-ui/core/Link';
import PropTypes from 'prop-types';
import MenuIcon from '@material-ui/icons/Menu';
import { withStyles } from '@material-ui/core/styles';

//Files
import "./style.css"

class Navbar extends Component {
  state = {
    mobileOpen: false,
  };

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  logOut(e) {
    e.preventDefault()
    localStorage.removeItem('usertoken')
    this.props.history.push(`/`)
  }

  render() {
  
    //For Login and Signup
    const loginRegLink = (
      <div>
        <Button>
          <Linkm
            className="navigation"
            component={Link}
            to="/register" size="medium" >Sign Up
              </Linkm>
        </Button>
        <Button>
          <Linkm
            className="navigation" component={Link}
            to="/login" size="medium">Login</Linkm>
        </Button>
      </div>
    )
    const userLink = (
      <div>
        <Linkm
          component={Link}
          to="/profile" size="large" color="white">User
              </Linkm>
        <Linkm
          component={Link}
          path="/" onClick={this.logOut.bind(this)} size="large" color="white">Logout</Linkm>
      </div>
    )
    //For responsive menu
    const drawer = (
      <div className="toolbar">
        <Typography variant="h5">Lost & Found</Typography>
        <Divider />
        <List>
          <ListItem button component={Link} to="/searchitem" size="small">SEARCH ITEM
          </ListItem>
          <ListItem button component={Link} to="/postitem" size="small">POST ITEM</ListItem>
          <ListItem button component={Link} to="/register" size="small">SIGN UP</ListItem>
          <ListItem button component={Link} to="/login" size="small">LOGIN</ListItem>
        </List>
        <Divider />
      </div>
    );

    return (
      <div className="root">
        <CssBaseline />
        <AppBar position="fixed" className="appBar">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerToggle}
              className="menuButton"
            >
              <MenuIcon />
            </IconButton>
            <div className="title">
              <a href="/" className="homelink">
                <Typography variant="h5" >
                  Lost & Found
               </Typography>
              </a>
            </div>
            <Button>
              <Linkm className="navigation" component={Link} to="/searchitem" size="medium">Search Item </Linkm>
            </Button>
            <Button>
              <Linkm className="navigation" component={Link} to="/postitem" size="medium">Post Item</Linkm>
            </Button>
            {/* <RenderedUserButtons /> */}
            <div>
              {localStorage.usertoken ? userLink : loginRegLink}
            </div>
          </Toolbar>
        </AppBar>
        <nav className="drawer">
          <Hidden xsUp implementation="css">
            <Drawer
              container={this.props.container}
              variant="temporary"
              open={this.state.mobileOpen}
              onClose={this.handleDrawerToggle}
            >
              {drawer}
            </Drawer>
          </Hidden>
        </nav>
      </div>
    );
  }
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
  container: PropTypes.object,
  theme: PropTypes.object.isRequired,
};

export default withStyles({ withTheme: true })(Navbar)

// export default withRouter(Navbar)