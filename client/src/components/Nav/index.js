import React, { useState, Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from '../../context/auth/authContext';
import ItemContext from '../../context/item/itemContext';
import ProfileContext from '../../context/profile/profileContext'

//Material UI
import {
  AppBar, Button, CssBaseline, Divider, Drawer, Hidden, IconButton, List, ListItem, Toolbar, Menu, MenuItem
} from '@material-ui/core'
import Linkm from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
// import { withStyles } from '@material-ui/core/styles';

//Files
import "./style.css"

const Navbar = () => {

  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  }
  const handleClose = () => {
    setAnchorEl(null);
  }

  const authContext = useContext(AuthContext);
  const itemContext = useContext(ItemContext);
  const profileContext = useContext(ProfileContext)

  const { isAuthenticated, logout, user } = authContext;
  const { clearItems } = itemContext;
  const {clearProfile} = profileContext

  const onLogout = () => {
    logout();
    clearItems();
    clearProfile();
  };

  //For Login and Signup
  const guestLinks = (
    <Fragment>
      <Button>
        <Linkm
          className="navigation"
          component={Link}
          to="/register" size="medium">Sign Up
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
      <IconButton aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} color="inherit">
        <AccountCircle />
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} component={Link} to="/profile">Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={() => {handleClose(); onLogout();}} component={Link} to="#!">Logout</MenuItem>
      </Menu>
    </Fragment>
  )
  //For responsive menu
  const drawer = (
    <div className="toolbar">
        <img className='displayDrawer' src='/images/logo2.png' alt='Lost and Found Logo'/>

      <Divider />
      <List>
        <ListItem button component={Link} to="/searchitem" size="small">SEARCH ITEM</ListItem>
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
              <img className='display' src='/images/logo.png' alt='Lost and Found Logo'/>
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


export default Navbar;