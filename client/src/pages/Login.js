import React from "react";
import {Route,Link} from "react-router-dom"
import GoogleLogin from 'react-google-login';
import "./Login.css"
import Loginform from "./Loginform";
import Signup from './SignUp';


class login extends Component{
    render(){    
        const responseGoogle = (response) => {
            console.log(response);
            this.signup(response, 'google')
            }

    return(
        <div className="login">
        <h1>Finder's Locker</h1>
            <p>Welcome to finder's locker</p>
            <Link to="/signup">Sign Up</Link>
            <Link to="/loginform">Login</Link>
            <GoogleLogin
                clientId="INPUT_GOOGLE_ID"
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
            />
            <Route path="/loginform" component={Loginform} />
            <Route path="/signup" component={Signup} />
        </div>
    )
}
}

export default login