import React, {Fragment, useContext } from "react";
import { Route, Link, Redirect, withRouter } from "react-router-dom"
import PropTypes from 'prop-types';
import AuthContext from '../../context/auth/authContext';
import ProfileContext from '../../context/profile/profileContext';

//Material UI Imports
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Linkm from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';

//File Imports
import "./style.css";

const  Navbar =({title}) => {
  const authContext = useContext(AuthContext);
  const profileContext = useContext(ProfileContext);

  const { isAuthenticated, logout, user } = authContext;
  const { clearProfiles } = profileContext;

  const onLogout = () => {
    logout();
    clearProfiles();
  };

  const authLinks = (
    <Fragment>
      Hello {user && user.name}
        <Button>
          <Linkm
            onClick={onLogout}
            href='#!' size='large'
            color='white'
          >Logout
          </Linkm>
        </Button>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
        <Linkm
          component={Link}
          to='/register' size='large'
          color='white'>Register</Linkm>
        <Linkm 
          component={Link}
        to='/login'
        size='large'
        color='white'>Login</Linkm>
    </Fragment>
  );

  return (
    <div className="root">
      <AppBar id="nav" position="fixed">
        <Toolbar>
          <div className="title">
            <Link to="/" className="home-link">
              <Typography variant="h5" >
                {title}
              </Typography>
            </Link>
          </div>
          <Button>
            <Linkm
              component={Link}
              to="/searchitem" size="large" color="white">Search</Linkm>
          </Button>
          <Button
            component={Link}
            to="/postitem" size="large" color="inherit">Post Item</Button>
          <div>
          {isAuthenticated ? authLinks : guestLinks}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string
};

Navbar.defaultProps = {
  title: 'Lost & Found',
};

export default withRouter(Navbar)