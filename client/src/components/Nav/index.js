import React from "react"
// import "./Navbar.css";

// Navbar component
const Navbar = props => (
  <nav className="navbar fixed-top navbar-dark p-3">
    <span className="navbar-brand"><a href="/">Finders Keeper</a></span>
    <span className="navbar-text text-white">{props.loginMessage}</span>
  </nav>
);

export default Navbar;