import React from 'react';
import { Link } from 'react-router-dom';

//Material UI
import { Button, Container, Grid, Typography } from '@material-ui/core';

//Import Files
import './style.css';

export default function Footer() {
    return (
        <Container>
            <Grid container id='footer'>
                <Grid items md={4} sm={4} xs={12} id='logo'>
                    <Link to='/' >
                        <img className='displayFooter' src='/images/logo.png' alt='Lost and Found logo' />
                    </Link>
                </Grid>
                <Grid items md={4} sm={8} xs={12} className='buttonNav'>
                    <Button><Link align='center' className='navigationFooter' to='/about'>About Us</Link></Button><br></br>
                    <Button><Link align='center' className='navigationFooter'>Terms and Conditions</Link></Button>
                    
                </Grid>
                <Grid items md={4} sm={12} xs={12}>
                    <Typography id="show">Copyright 2019 - Lost & Found</Typography>
                </Grid>
                <Grid items sm={12}>
                    <Typography align='center' id='hide'>Copyright 2019 - Lost & Found</Typography>
                </Grid>
            </Grid>
        </Container>
    );
};