import React from 'react';

//Material UI Imports
import { Card, CardContent, Container, Grid, Typography } from '@material-ui/core/'


import Header from '../components/Header'

import '../App.css'

function Privacy() {
    return (
        <React.Fragment>
            <Header type='privacy' />
            <Container className='container'>
                <Grid container>
                    <Grid item md={12} sm={12} xs={12}>
                        <Card className="card">
                            <CardContent>
                                <Typography variant='h4' align='center' className='h4'>Privacy Notice</Typography>
                                <Typography className='mt-2'>This privacy notice discloses the privacy practices for the Lost & Found website. This privacy notice applies solely to information collected by this website. It will notify you of the following:</Typography>
                               <ol className='mt-1'>
                                    <li className='ml-3'>What personally identifiable information is collected from you through the website, how it is used and with whom it may be shared.</li>
                                    <li className='ml-3'>What choices are available to you regarding the use of your data.</li>
                                    <li className='ml-3'>The security procedures in place to protect the misuse of your information.</li>
                                </ol>
                                <Typography variant='h5' className='mt-2'>How you can correct any inaccuracies in the information.</Typography>
                                <Typography variant='h6' className='mt-2'>Information Collection, Use, and Sharing </Typography>
                                <Typography className='mt-1'>We are the sole owners of the information collected on this site. We only have access to/collect information that you voluntarily give us via the site.</Typography>
                                <Typography className='mt-1'>The information collected on the site will not be shared with any third party outside of our organization, other than as necessary to fulfill your request.</Typography>
                                 <ol className='mt-1'>
                                    <li className='ml-3'> See what data we have about you, if any.</li>
                                    <li className='ml-3'>Change/correct any data we have about you.</li>
                                    <li className='ml-3'>Have us delete any data we have about you.</li>
                                    <li className='ml-3'>Express any concern you have about our use of your data.</li>
                                </ol>
                                <Typography variant='h6' className='mt-2'>Security </Typography>
                                <Typography className='mt-1'>We take precautions to protect your information. When you submit sensitive information via the website, your information is protected both online and offline.</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </React.Fragment>
    );
}

export default Privacy;
