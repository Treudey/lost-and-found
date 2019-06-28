import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Loginform from "./pages/Loginform"
import Profile from "./pages/Profile";
import Lost from "./pages/Lost";
import Found from "./pages/Found";
import NoMatch from "./pages/NoMatch";
import Navbar from "./components/Nav";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div>
        <Navbar isLoggedIn={false}/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/loginform" component={Loginform} />
          <Route exact path="/searchitem" component={Lost} />
          <Route exact path="/postitem" component={Found} />
          <Route exact path="/profile/:id" component={Profile} />
          <Route component={NoMatch} />
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
