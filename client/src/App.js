import React, {Component,Fragment} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Profilepg from "./components/pages/Profilepg";
import Lost from "./pages/Lost";
import Found from "./pages/Found";
import NoMatch from "./pages/NoMatch";

import Navbar from "./components/Nav";
import Footer from "./components/Footer";
import Alerts from './components/layout/Alerts';

import PrivateRoute from './components/routing/PrivateRoute';
import ProfileState from './context/profile/ProfileState';
import AuthState from './context/auth/AuthState';
import AlertState from './context/alert/AlertState';
import setAuthToken from './utils/setAuthToken';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}


const App =()=> {
  return (
  <AuthState>
      <ProfileState>
        <AlertState>
          <Router>
            <Fragment>
              <Navbar />
              <div className='container'>
                <Alerts />
                <Switch>
                  <PrivateRoute exact path='/profile' component={Profilepg}/>
                  <Route exact path="/" component={Home} />
                  <Route exact path='/register' component={Register} />
                  <Route exact path='/login' component={Login} />
                   {/* Please double check Route for seatch & found */}
                  <Route exact path="/searchitem" component={Lost} />
                  <Route exact path="/postitem" component={Found} />
                  <Route component={NoMatch} />
                </Switch>
              </div>
            </Fragment>
          </Router>
        </AlertState>
      </ProfileState>
  </AuthState>
   
  );
}

export default App;
