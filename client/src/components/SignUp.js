import React, { Component } from "react";
import {Route,Link,Redirect} from "react-router-dom"
import GoogleLogin from 'react-google-login';
import {PostData} from "../pages/PostData";
import { register } from './UserFunctions'
import "./Loginform.css"


class Signup extends Component{
  constructor(props) {
    super(props);
    this.state = {
      username:'',
      email: '',
      password: '',
      loginError: false,
      redirect: false
    };

    this.signup = this.signup.bind(this);
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  
  }

  onChange(e){
    this.setState({[e.target.name]:e.target.value})
  }

  onSubmit(e){
    e.preventDefault()

    const user = {
      username:this.state.username,
      email:this.state.email,
      password:this.state.password
    }

    register(user).then(res=>{
        this.props.history.push(`/login`)
      
    })
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


  render() {

    if (this.state.redirect || sessionStorage.getItem('userData')) {
      return (<Redirect to={'/searchitem'}/>)
  }
  const responseGoogle = (response) => {
      console.log(response);
      this.signup(response, 'google')
      }

    return(
    <div className="wrapper">
      <div className="form-wrapper">
        <h1>Sign Up</h1>
        <form onSubmit={this.onSubmit} noValidate>
        <div className="email">
            <label htmlFor="username">Username</label>
            <input 
            type="text" 
            className="" 
            placeholder="username" 
            name="username"
            value={this.state.username}
            onChange={this.onChange}/>
          </div>

          <div className="email">
            <label htmlFor="email">Email</label>
            <input 
            type="email" 
            className="" 
            placeholder="email" 
            name="email"
            value={this.state.email}
            onChange={this.onChange}/>
          </div>

          <div className="password">
            <label htmlFor="password">Password</label>
            <input 
            type="password" 
            className="" 
            placeholder="password" 
            name="password"
            value={this.state.password}
            onChange={this.onChange}/>
          </div>
          <div className="register">
            <button type="submit">Sign Up</button>
          </div>
          <GoogleLogin
                clientId="972112242986-chls7kd871dadf311gfa8539moa9ggv1.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
            />
        </form>
      </div>
    </div>
    )
}
}

export default Signup

