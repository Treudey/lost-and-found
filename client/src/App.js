import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Profilepg from "./pages/Profilepg";
import Lost from "./pages/Lost";
import Found from "./pages/Found";
import NoMatch from "./pages/NoMatch";
import About from "./pages/About"

import Navbar from "./components/Nav";
import Footer from "./components/Footer";
import Alerts from './components/layout/Alerts';

import PrivateRoute from './components/routing/PrivateRoute';
import ProfileState from './context/profile/ProfileState';
import AuthState from './context/auth/AuthState';
import AlertState from './context/alert/AlertState';
import setAuthToken from './utils/setAuthToken';
// import './App.css'

if (localStorage.token) {
  setAuthToken(localStorage.token);
}


const App =()=> {
  return (
  <AuthState>
    <ProfileState>
      <AlertState>
        <Router>
          <div>
            <Navbar />
            <Switch>
              <Route exact path="/" component={Home} />
              <PrivateRoute exact path='/profile' component={Profilepg}/>
              <Route exact path='/register' component={Register} />
              <Route exact path='/login' component={Login} />
              <Route exact path="/searchitem" component={Lost} />
              <Route exact path="/postitem" component={Found} />
              <Route exact path="/about" component={About} />
              <Route component={NoMatch} />
            </Switch>
            <Footer />
           </div>
        </Router>
      </AlertState>
    </ProfileState>
  </AuthState>
   
  );
}

export default App;
