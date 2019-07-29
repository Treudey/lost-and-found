import React, { useState, useContext, useEffect } from 'react'
import ProfileContext from '../../context/profile/profileContext'
import AlertContext from '../../context/alert/alertContext';
import AuthContext from '../../context/auth/authContext';
import Alerts from '../layout/Alerts';

//Material UI Imports
import { Button, Card, CardContent, Container, TextField, Typography } from '@material-ui/core/'

//Import files
import './style.css';


const ProfileForm = props => {
    const profileContext = useContext(ProfileContext);
    const { current, clearCurrent, updateProfile } = profileContext

    const authContext = useContext(AuthContext);
    const { error, clearErrors, isAuthenticated } = authContext;

    const alertContext = useContext(AlertContext);
    const { setAlert } = alertContext;


    useEffect(() => {
        if (current !== null) {
            setUser(current)
        } else {
            setUser(
                {
                    name: '',
                    email: '',
                }
            )
        }
        if (error === 'User already exists') {
            setAlert(error, 'danger');
            clearErrors();
        }
        // eslint-disable-next-line
    }, [error, isAuthenticated, profileContext, current]) //[]: only want it to change when profilecontext and current change

    const [user, setUser] = useState({
        name: '',
        email: '',
    });

    const { name, email } = user;

    const onChange = e => setUser({ ...user, [e.target.name]: e.target.value })
    const onSubmit = e => {
        e.preventDefault();
        updateProfile(user)
        clearCurrent()
    }

    return (
        <Container className='profileContainer'>
            <Card className='height'>
                <CardContent>
                    <Typography component='h1' variant='h4' className='h4' align='center' gutterBottom>
                        Change your Account Information here</Typography>
                    <Alerts />
                    <form onSubmit={onSubmit}>
                        <TextField
                            label='Name'
                            placeholder='Name'
                            name='name'
                            value={name}
                            onChange={onChange}
                            fullWidth
                            required
                            aria-describedby='name-helper-text' />
                        <TextField
                            label='Email'
                            placeholder='Email'
                            name='email'
                            value={email}
                            onChange={onChange}
                            fullWidth
                            required
                            aria-describedby='email-helper-text' /><br></br>
                        <Button
                            type='submit'
                            value='Update'
                            className='hover margin'
                            variant='contained'
                            style={{ backgroundColor: '#152b51', color: 'white' }}
                        >Update</Button>
                        {current &&
                            <Button
                                style={{ backgroundColor: '#152b51', color: 'white' }}
                                type='submit'
                                value='Clear'
                                className='hover margin'
                                onClick={() => clearCurrent()}
                            >Clear</Button>
                        }
                    </form>
                </CardContent>
            </Card>
        </Container>
    )
}

export default ProfileForm
