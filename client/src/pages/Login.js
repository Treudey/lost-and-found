import React from "react";
import {Route,Link} from "react-router-dom"
// import Loginform from './Loginform';
import "./Login.css"
import Loginform from "./Loginform";
import Signup from './SignUp';


function login(){
    return(
        <div className="login">
        <h1>Finder's Locker</h1>
            <p>Welcome to finder's locker</p>
            <Link to="/signup">Sign Up</Link>
            <Link to="/loginform">Login</Link>
            <Link to="/auth/google">Signin With Google</Link>
            <Route path="/loginform" component={Loginform} />
            <Route path="/signup" component={Signup} />


        </div>
    )
}

export default login