import React from 'react';

//Material UI Imports
import {Card, CardActions, CardContent, Button, Container, Grid, Icon, TextField, Typography} from '@material-ui/core/'

import CloudUploadIcon from '@material-ui/icons/CloudUpload';

//Import Files
import Header from '../components/Header'
import './found.css';

export default function Found() {
  return (
    <React.Fragment>
      <Header className='heroContent' type='found'/>
      <Container className='container'>
        <Grid container>
          <Grid item md={12} sm={12} xs={12}>
            <Card className='card'>
              <CardContent className='cardContent'>
                <Typography className='h4' component='h1' variant='h4' align='center' gutterBottom>
                  Tell us a bit about the item you lost
                  </Typography>
                <form noValidate autoComplete='off'>
                  <Grid item md={12} sm={12} xs={12} className='grid'>
                    <TextField
                      className='textfield'
                      id='titleItemField'
                      htmlFor='titleItem'
                      label='1. Please provide a title for the item you lost'
                      helperText='Please provide a title for the item you lost'
                      fullWidth={true}
                      required={true}
                      aria-describedby='title-found-helper-text'
                    />
                  </Grid>
                  <Grid item md={12} sm={12} xs={12} className='grid'>
                    <TextField
                      className='textfield'
                      id='locationItemField'
                      htmlFor='locationItem'
                      label='2. Please indicate the location where the item was found'
                      helperText='Please share the rough location or main intersection where you found the item'
                      fullWidth={true}
                      required={true}
                      aria-describedby='location-found-helper-text'
                    />
                  </Grid>
                  <Grid item md={12} sm={12} xs={12} className='grid'>
                    <TextField
                      className='textfield'
                      id='colorItemField'
                      htmlFor='colorItem'
                      label='3. Please provide the colour(s) of the item'
                      helperText='Please share the colour(s) of the item you found'
                      fullWidth={true}
                      required={true}
                      aria-describedby='color-found-helper-text'
                    />
                  </Grid>
                  <Grid item md={12} sm={12} xs={12} className='grid'>
                    <TextField
                      id='descriptionItemField'
                      htmlFor='descriptionItem'
                      label='4. Please provide a description of the item'
                      helperText='Please give us little description about the item you found'
                      fullWidth={true}
                      required={true}
                      multiline={true}
                      rows='3'
                      aria-describedby='description-found-helper-text'
                      margin='normal'
                    />
                  </Grid>
                  <Grid item md={12} sm={12} xs={12} className='grid'>
                    <TextField
                      className='textfield'
                      id='imageItemField'
                      label='5. Please upload the image of the item you found in here'
                      helperText='Please upload the image of the item you found in here'
                      fullWidth={true}
                      disabled={true}
                      aria-describedby='image-found-helper-text'
                      InputLabelProps={{
                        shrink: true,
                      }}
                      accept='image/*'
                      multiple
                      type='file'
                    />
                    <Button variant='contained' color='default' className='buttonUpload'>
                      Upload
                        <CloudUploadIcon className='rightIcon'/>
                    </Button>
                  </Grid>
                </form>
              </CardContent>
              <CardActions> <Button className='sendButton' variant='contained'>Send
                      <Icon className='rightIcon'>send</Icon>
                    </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}