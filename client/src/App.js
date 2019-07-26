import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Itempg from './pages/Itempg';
import Lost from './pages/Lost';
import Found from './pages/Found';
import NoMatch from './pages/NoMatch';
import About from './pages/About'
import Profile from './pages/Profile'

import Navbar from './components/Nav';
import Footer from './components/Footer';
import Alerts from './components/layout/Alerts';

import PrivateRoute from './components/routing/PrivateRoute';
import ItemState from './context/item/ItemState';
import AuthState from './context/auth/AuthState';
import ProfileState from './context/profile/ProfileState'
import AlertState from './context/alert/AlertState';
import setAuthToken from './utils/setAuthToken';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}


const App =()=> {
return (
  <AuthState>
    <ItemState>
      <ProfileState>
      <AlertState>
        <Router>
          <div>
            <Navbar />
            <Switch>
              <Route exact path='/' component={Home} />
              <PrivateRoute exact path='/item' component={Itempg}/>
              <PrivateRoute exact path='/profile' component={Profile} />
              <Route exact path='/register' component={Register} />
              <Route exact path='/login' component={Login} />
              <Route exact path='/searchitem' component={Lost} />
              <Route exact path='/postitem' component={Found} />
              <Route exact path='/about' component={About} />
              <Route component={NoMatch} />
            </Switch>
            <Footer />
           </div>
        </Router>
      </AlertState>
      </ProfileState>
    </ItemState>
  </AuthState>
  );
}

export default App;
