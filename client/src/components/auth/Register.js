import React, { useState, useContext, useEffect } from 'react';
import AlertContext from '../../context/alert/alertContext';
import AuthContext from '../../context/auth/authContext';

// Material UI Imports
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Card, CardContent, Grid } from '@material-ui/core/'
import { withStyles} from '@material-ui/core/styles'




const styles = theme=>({
  containerMargin:{
    marginTop:'80px',
  },
})

const Register = props => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);

  const { setAlert } = alertContext;
  const { register, error, clearErrors, isAuthenticated } = authContext;

  const {classes} = props

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push('/');
    }

    if (error === 'User already exists') {
      setAlert(error, 'danger');
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  });

  const { name, email, password, password2 } = user;

  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (name === '' || email === '' || password === '') {
      setAlert('Please enter all fields', 'danger');
    } else if (password !== password2) {
      setAlert('Passwords do not match', 'danger');
    } else {
      register({
        name,
        email,
        password
      });
    }
  };
  return (
    <Container component = "main" maxWidth = "xs" className={classes.containerMargin} >
    <CssBaseline />
      <Grid container>
      <Grid item md={12} sm={12} xs={12}>
        <Card className='card' >
        <CardContent className='cardContent'>
          <div>
          <Typography component="h1" variant="h4">
              Register
          </Typography>
                <form onSubmit={onSubmit}>
              <TextField 
                onChange={onChange}
                value={name}
                name='name'
                label="username"
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="name"
                autoFocus
                type='text'
              />

              <TextField 
                onChange={onChange}
                value={email}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />

                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={onChange}
                />

                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="password2"
                  label="Confirm Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  value={password2}
                  onChange={onChange}
                />

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  className="register"
                >
                  Register
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


export default withStyles(styles)(Register);
