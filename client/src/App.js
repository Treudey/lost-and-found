import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./components/SignUp";
import Loginform from "./components/Loginform"
import Profile from "./components/Profile";
import Lost from "./pages/Lost";
import Found from "./pages/Found";
import NoMatch from "./pages/NoMatch";
import Navbar from "./components/Nav";
import Footer from "./components/Footer";

class App extends Component {
  render(){
  return (
    <Router>
      <div>
        <Navbar isLoggedIn={false}/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={SignUp} />
          <Route exact path="/loginform" component={Loginform} />
          <Route exact path="/searchitem" component={Found} />
          <Route exact path="/postitem" component={Lost} />
          <Route exact path="/profile" component={Profile} />
          <Profile history= {this.props.history}/>
          <Route component={NoMatch} />
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}
}

export default App;
