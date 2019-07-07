import React from 'react';

//Material UI Imports
import {Button, Card,  CardContent,  Container, Grid, InputAdornment, TextField, Typography} from '@material-ui/core/'

import Search from '@material-ui/icons/Search';

//Import Files
import Header from '../components/Header'
import './lost.css';

export default function Lost() {
  return (
    <React.Fragment>
      <Header type='lost'/>
      <Container className='container'>
        <Grid container >
          <Grid item md={12} sm={12} xs={12}>
            <Card className='card' >
              <CardContent className='cardContent'>
                <Typography className='h4' component='h1' variant='h4' align='center' gutterBottom>
                  Tell us a bit about the item you lost
                  </Typography>
                <form noValidate autoComplete='off'>
                  <Grid item sm={12} xs={12} className='grid'>
                    <TextField
                      id='search'
                      style={{ margin: 8 }}
                      placeholder='Search'
                      helperText='Search'
                      fullWidth
                      margin='normal'
                      variant='outlined'
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position='start'>
                            <Search />
                          </InputAdornment>
                        ),
                      }}
                    />
                    <Button variant='contained' className='button'>
                      Search
                    </Button>
                  </Grid>
                </form>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Grid container >
          <Grid item md={12} sm={12} xs={12}>
            <Card className='card'>
              <CardContent className='cardContent'>
                <Typography className='h4' component='h1' variant='h4' align='center' gutterBottom>
                  Results
                  </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}