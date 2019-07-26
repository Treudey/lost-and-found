import React from 'react';
import { Link } from 'react-router-dom';
//Material UI

import { Button, Container, Grid, Typography } from '@material-ui/core';

//Import Files
import './style.css';

export default function Footer() {
	return (
		<Container className='positionBottom'>
			<Grid container id='footer'>
				<Grid items md={4} sm={12} xs={12} id='logo'>
					<Link to='/' >
						<img className='display' src='/images/logo.png' />
					</Link>
				</Grid>
				<Grid items md={4} sm={12} xs={12}>
					<Button><Link align='center' className='navigationFooter' to='/about'>About Us</Link></Button><br></br>
					<Button><Link align='center' className='navigationFooter'>Terms and Conditions</Link></Button><br></br>
				</Grid>
				<Grid items md={4} sm={12} xs={12} >
					<Typography id='bottom'>Copyright 2019 - Lost & Found</Typography>
				</Grid>
			</Grid>
		</Container>
	);
};