import React, { useState, useContext, useEffect } from 'react';
import AuthContext from '../../context/auth/authContext';
import AlertContext from '../../context/alert/alertContext';
import Alerts from '../layout/Alerts';


// Material UI Imports
import { Button, Card, CardContent, Container, CssBaseline, Grid, TextField, Typography } from '@material-ui/core/'
import Lock from '@material-ui/icons/Lock'

import './auth.css'
import '../../App.css'

const Login = props => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);

  const { setAlert } = alertContext;
  const { login, error, clearErrors, isAuthenticated } = authContext;

  const { classes } = props

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push('/item');
    }

    if (error === 'Invalid Credentials') {
      setAlert(error, 'danger');
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    email: '',
    password: ''
  });

  const { email, password } = user;

  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (email === '' || password === '') {
      setAlert('Please fill in all fields', 'danger');
    } else {
      login({
        email,
        password
      });
    }
  };

  return (
    <Container component='main' maxWidth='xs' className='loginContainer'>
      <CssBaseline />
      <Grid container>
        <Grid item md={12} sm={12} xs={12}>
          <Card className='loginCard'>
           <div className='text-align'>
            <Lock style={{fontSize: 60}} className='avatar-login'/>
           </div>
            <Alerts />
            <CardContent>
              <div>
                <Typography component='h1' variant='h4' className='text-align'>
                  Login
              </Typography>
                <form onSubmit={onSubmit}>
                  <TextField
                    variant='outlined'
                    margin='normal'
                    required
                    fullWidth
                    id='email'
                    label='Email Address'
                    name='email'
                    autoComplete='email'
                    autoFocus
                    value={email}
                    onChange={onChange}
                  />
                  <TextField
                    variant='outlined'
                    margin='normal'
                    required
                    fullWidth
                    name='password'
                    label='Password'
                    type='password'
                    id='password'
                    autoComplete='current-password'
                    value={password}
                    onChange={onChange}
                  /><br></br>
                  <Button
                    type='submit'
                    fullWidth
                    variant='contained'
                    className='register hover'
                    style={{backgroundColor: '#152b51', color: 'white'}}
                  >
                    Login
                  </Button>
                </form>
              </div>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
