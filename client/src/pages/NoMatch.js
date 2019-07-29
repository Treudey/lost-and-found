import React from 'react';
import { Link } from 'react-router-dom';

//Material UI Imports
import { Button, Container, Grid } from '@material-ui/core/'

//Style Imports
import '../App.css'
import './nomatch.css';


export default function NoMatch() {

    return (
        <React.Fragment>
            <Container className='notFoundContainer'>
            <Grid container justify='center'>
                <Grid item md={7} sm={12} xs={12} className='gif'>
                    <img src='/images/404.gif' alt='404 gif'/>
                    <Button fullWidth style={{ backgroundColor: '#F6511D', color: 'white' }} component={Link} to='/' className='hover'>Home</Button>
                </Grid>
            </Grid>
            </Container>
        </React.Fragment>
    );
}