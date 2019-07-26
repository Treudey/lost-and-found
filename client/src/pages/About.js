import React from 'react';
import { Link } from "react-router-dom";

//Material UI Imports
import { Button, Card, CardActions, CardActionArea, CardContent, CardMedia, Container, Divider, Grid, Typography } from '@material-ui/core/'

import './about.css'

export default function About() {
  return (
    <React.Fragment>
      <Container className="main">
        <Card className='card-about'>
          <Grid container justify='center'>
            <Grid items md={12}>
            </Grid>
            <Grid items md={3} sm={6} align='center'>
              <CardMedia
                className='cover'
                component='img'
                image="/images/hello.png"
                title="Hello Logo"
                alt='Hello Logo'
              />
            </Grid>
            <Grid items md={9}>
              <div className='details'>
                <CardContent className='content'>
                  <Typography className='about' component='h1' variant='h4'>About Us</Typography>
                  <Typography>Lost a book on the subway? Misplaced your wallet? Can't find your bracelet? <span className='lostFound'>Lost & Found</span> can help.</Typography><br></br>
                  <Typography><span className='lostFound'>Lost & Found</span> is a web application that allows users to track down their missing or lost possessions. This application is aimed at both indivduals and organizations who need to manage lost items.</Typography>
                </CardContent>
              </div>
            </Grid>
          </Grid>
        </Card>
        <Typography className='heading' component='h1' variant='h4' align='center'>How It Works</Typography>
        <Grid container justify='center'>
          <Grid item md={4}>
            <Card className='displayBox'>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Lost Logo"
                  height="150"
                  image="/images/lost2.png"
                  title="Lost Logo"
                />
              </CardActionArea>
              <CardContent>
                <Typography variant="h6" align='center'>Have you lost and item?</Typography>
                <Typography align='center'>If you've lost an item, navigate to the <Link className='pages' to='/searchitem'>Search Item</Link> page and fill out the form. Once submitted, results of you search based on the location you lost the item and the type of item lost will be displayed. If your item is listed, you may contact the poster via the application's chat function.</Typography>
              </CardContent>
              <CardActions>
                <Button variant='contained' fullWidth={true} style={{ backgroundColor: '#F6511D', color: 'white' }} component={Link} to='/searchitem'>Lost Something?</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid items md={1}></Grid>
          <Grid item md={4}>
            <Card className='left-margin'>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Found Logo"
                  height="150"
                  image="/images/found2.png"
                  title="Found Logo"
                />
              </CardActionArea>
              <CardContent>
                <Typography variant='h6' align='center'>Have you found an item?</Typography>
                <Typography align='center'>If you've found an item, navigate to the <Link className='pages' to='/positem'>Post Item</Link> page and fill out the form. Once submitted, users searching for an item can do so based on the item information you have provided. If someone would like to retrieve their item, they can contact you via the application's chat function.</Typography>
              </CardContent>
              <CardActions>
                <Button variant='contained' fullWidth={true} style={{ backgroundColor: '#7FB800', color: 'white' }} component={Link} to='/postitem'>Found Something?</Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  )
}
