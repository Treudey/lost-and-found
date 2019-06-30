import React, { Component } from "react";
import {Route,Link,Redirect} from "react-router-dom"
import "./Login.css"
import Loginform from "../components/Loginform";
import Signup from '../components/SignUp';
import {PostData} from "./PostData";


class login extends Component{

    constructor(props) {
        super(props);
           this.state = {
           loginError: false,
           redirect: false
        };
        this.signup = this.signup.bind(this);
    }

    signup(res, type) {
        let postData;
   
       if (type === 'google' && res.w3.U3) {
       postData = {
         name: res.w3.ig,
         provider: type,
         email: res.w3.U3,
         provider_id: res.El,
         token: res.Zi.access_token,
         provider_pic: res.w3.Paa
       };
   }

   if (postData) {
    PostData('signup', postData).then((result) => {
       let responseJson = result;
       sessionStorage.setItem("userData", JSON.stringify(responseJson));
       this.setState({redirect: true});
    });
    } else {}
    }

    render(){   

        if (this.state.redirect || sessionStorage.getItem('userData')) {
            return (<Redirect to={'/searchitem'}/>)
        }
        const responseGoogle = (response) => {
            console.log(response);
            this.signup(response, 'google')
            }

    return(

        <div className="login">
            {/* <Link to="/signup">Sign Up</Link>
            <Link to="/loginform">Login</Link> */}
            <Loginform/>
            <Route path="/loginform" component={Loginform} />
            <Route path="/signup" component={Signup} />
        </div>
    )
}
}

export default login;