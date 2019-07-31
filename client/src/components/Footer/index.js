import React from 'react';
import { Link } from 'react-router-dom';

//Material UI
import { Button, Container, Grid, Typography } from '@material-ui/core';

//Import Files
import './style.css';

export default function Footer() {
    return (
        <Container>
            <Grid container className='footer'>
                <Grid items md={12} sm={12} xs={12}>
                    <Typography id="hide">Copyright 2019 - Lost & Found</Typography>
                </Grid>
                <Grid items md={4} id='logo'>
                    <Link to='/' >
                        <img className='displayFooter' src='/images/logo.png' alt='Lost and Found logo' />
                    </Link>
                </Grid>
                <Grid items md={4} className='buttonNav'>
                    <Button><Link align='center' className='navigationFooter' to='/about'>About Us</Link></Button><br></br>
                    <Button><Link align='center' className='navigationFooter' to='/privacy'>Privacy Policy</Link></Button>
                </Grid>
                <Typography id="show">Copyright 2019 - Lost & Found</Typography>
            </Grid>
        </Container>
    );
};