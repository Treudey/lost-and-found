import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import './Loginform.css'

class signup extends Component{
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      password: null,
    };
  }

  handleSubmit = e => {
    e.preventDefault();
  };

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
  };

  render() {

    return(
      <Container component='main' maxWidth='xs'>
      <CssBaseline />
    <div className='wrapper'>
      <div className='form-wrapper'>
        <h1>Sign Up</h1>
        <form onSubmit={this.handleSubmit} noValidate>
          <div className='email'>
            <label htmlFor='email'>Email</label>
            <input 
            type='text' 
            className='' 
            placeholder='email' 
            name='email'
            noValidate
            onChange={this.handleChange}
            />
          </div>

          <div className='password'>
            <label htmlFor='password'>Password</label>
            <input 
            type='text' 
            className='' 
            placeholder='password' 
            name='password'
            noValidate
            onChange={this.handleChange}
            />
          </div>
          <div className='register'>
            <button type='submit'>Sign up</button>
          </div>
        </form>
      </div>
    </div>
    </Container>
    )
}
}

export default signup


