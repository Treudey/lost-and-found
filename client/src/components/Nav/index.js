import React from "react"
// import "./Navbar.css";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg">
            <a className="navbar-brand" href="/">
                <h2 className="text-white">Finders Keepers</h2>
            </a>
            <div id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item" id="home">
                        <a className="nav-link" href="/">Home</a>
                    </li>
                    <li className="nav-item" id="report">
                        <a className="nav-link" href="/postitem">Lost Items</a>
                    </li>
                    <li className="nav-item" id="report">
                        <a className="nav-link" href="/searchitems">Found Items</a>
                    </li>
                    <li className="nav-item" id="report">
                        <a className="nav-link" href="/login">Login</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;