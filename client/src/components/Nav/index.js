import React, { useState, Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from '../../context/auth/authContext';
import ProfileContext from '../../context/profile/profileContext';

//Material UI
import {
  AppBar, Button, CssBaseline, Divider, Drawer, Hidden, IconButton, List, ListItem, Toolbar, Typography
} from '@material-ui/core'
import Linkm from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import { withStyles } from '@material-ui/core/styles';

//Files
import "./style.css"

const Navbar =({title})=> {

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const authContext = useContext(AuthContext);
  const profileContext = useContext(ProfileContext);

  const { isAuthenticated, logout, user } = authContext;
  const { clearProfiles } = profileContext;

  const onLogout = () => {
    logout();
    clearProfiles();
  };

    //For Login and Signup
    const guestLinks = (
      <Fragment>
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
      </Fragment>
    )

    const authLinks = (
      <Fragment>
        <Button>
          <Linkm className="navigation" component={Link} to="/profile" size="medium">Hello {user && user.name}</Linkm>
        </Button>

        <Button>
          <Linkm className="navigation" onClick={onLogout} component={Link} to="#!" size="medium">Logout</Linkm>
        </Button>
      </Fragment>
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
              onClick={handleDrawerToggle}
              className="menuButton"
            >
              <MenuIcon />
            </IconButton>
            <div className="title">
              <Link to="/" className="homelink">
                <Typography variant="h5" >
                {title}
               </Typography>
              </Link>
            </div>
            <Button>
              <Linkm className="navigation" component={Link} to="/searchitem" size="medium">Search Item </Linkm>
            </Button>
            <Button>
              <Linkm className="navigation" component={Link} to="/postitem" size="medium">Post Item</Linkm>
            </Button>
            <div>
            {isAuthenticated ? authLinks : guestLinks}
            </div>
          </Toolbar>
        </AppBar>
        <nav className="drawer">
          <Hidden xsUp implementation="css">
            <Drawer
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
            >
              {drawer}
            </Drawer> 
          </Hidden>
        </nav>
      </div>
    );
  
}

Navbar.defaultProps = {
  title: 'Lost & Found',
};

export default withStyles({ withTheme: true })(Navbar);