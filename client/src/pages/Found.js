import React, { Component } from 'react';

//Material UI Imports
import { Avatar, Button, Card, CardActions, CardContent, Container, Divider, Grid, Icon, List, ListItem, ListItemAvatar, ListItemText, TextField, Typography } from '@material-ui/core/'

import CloudUploadIcon from '@material-ui/icons/CloudUpload';

import Header from '../components/Header'
import Maps from '../components/Map'
import API from '../utils/API';
import '../App.css'
import './found.css';

class Found extends Component {
  state = {
    items: [],
    title: "",
    contact: "",
    color: "",
    location: "",
    description: "",
    image: "",
    date: ""
  };

  // When the component mounts, load all found items and save them to this.state.items
  componentDidMount() {
    this.loadItems();
  }


  // Loads all items and sets them to this.state.items
  loadItems = () => {
    API.getLostItems()
      .then(res =>
        this.setState({ items: res.data, title: "", color: "", location: "", description: "", image: "", date: "" })
      )
      .catch(err => console.log(err));
  };

  // Handles updating component state when the user types into the input field
  handleInputChange = event => {
    const { name, value } = event.target;
    console.log("Event.target", event.target.id);
    console.log("NAME", name);
    console.log("value", value);
    if (event.target.id === "titleItemField") {
      this.setState({
        title: value
      });
    } else if (event.target.id === "locationItemField") {
      this.setState({
        location: value
      });
    } else if (event.target.id === "colorItemField") {
      this.setState({
        color: value
      });
    } else if (event.target.id === "descriptionItemField") {
      this.setState({
        description: value
      });
    } else if (event.target.id === "imageItemField") {
      this.setState({
        image: value
      });
    } else if (event.target.id === "contactItemField") {
      this.setState({
        contact: value
      });
    }

  };


  // When the form is submitted, use the API.postFoundItem method to save the book data
  // Then reload books from the database
  handleFormSubmit = event => {
    event.preventDefault();
    console.log("handleformsubmit:");
    console.log(this.state);
    // debugger;
    if (this.state.title && this.state.color && this.state.location && this.state.description) {
      API.postFoundItem({
        foundTitle: this.state.title,
        foundPhoneNumber: this.state.contact,
        foundColor: this.state.color,
        foundLocation: this.state.location,
        foundDescription: this.state.description,
        foundImage: this.state.image,
        foundDate: this.state.date
      })
        .then(res => this.loadItems())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <React.Fragment>
        <Header type='found' />
        <Container className='container'>
          <Grid container>
            <Grid item md={12} sm={12} xs={12}>
              <Card className="card">
                <CardContent>
                  <Typography component="h1" variant="h4" className='h4' align='center' gutterBottom>
                    Tell us a bit about the item you found
                    </Typography>
                  <form noValidate autoComplete='off'>
                    <Grid item md={12} sm={12} xs={12} className='grid'>
                      <TextField
                        value={this.state.title}
                        onChange={this.handleInputChange}
                        id='titleItemField'
                        htmlFor='titleItem'
                        label='1. Type of item found'
                        helperText='Please provide use a name for the item you found'
                        fullWidth={true}
                        required={true}
                        aria-describedby='title-found-helper-text'
                      />
                    </Grid>
                    <Grid item md={12} sm={12} xs={12} className='grid'>
                        <TextField
                          value={this.state.contact}
                          onChange={this.handleInputChange}
                          id="contactItemField"
                          name="contactItemField"
                          htmlFor="contactItem"
                          label="2. Contact Number"
                          helperText="Please provide a your contact number where person can reach you"
                          fullWidth
                          required
                          aria-describedby="contact-lost-helper-text"
                        />
                      </Grid>
                    <Grid item md={12} sm={12} xs={12} className='grid'>
                    <TextField
                        value={this.state.location}
                        onChange={this.handleInputChange}
                        id='locationItemField'
                        htmlFor='locationItem'
                        label='3. Postal Code'
                        helperText='Please share (or copy & paste) the postal code where you found the item by dragging pin on the map below'
                        fullWidth={true}
                        required={true}
                        aria-describedby='location-found-helper-text'
                      />
                      <Maps
                        google={this.props.google}
                        center={{ lat: 43.662609, lng: -79.397849 }}
                        height='300px'
                        zoom={15}
                      />
                    </Grid>
                    <Grid item md={12} sm={12} xs={12} className='grid'>
                      <TextField
                        value={this.state.color}
                        onChange={this.handleInputChange}
                        id='colorItemField'
                        htmlFor='colorItem'
                        label='4. Colour'
                        helperText='Please share the colour(s) of the item you found'
                        fullWidth={true}
                        required={true}
                        aria-describedby='color-found-helper-text'
                      />
                    </Grid>
                    <Grid item md={12} sm={12} xs={12} className='grid'>
                      <TextField
                        value={this.state.description}
                        onChange={this.handleInputChange}
                        id='descriptionItemField'
                        htmlFor='descriptionItem'
                        label='5. Description'
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
                        value={this.state.image}
                        onChange={this.handleInputChange}
                        className='textfield'
                        id='imageItemField'
                        label='6. Image'
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
                      <Button variant='contained' color='default' className='buttonUpload hover'>
                        Upload
                        <CloudUploadIcon className='rightIcon' />
                      </Button>
                    </Grid>
                  </form>
                </CardContent>
                <CardActions> 
                  <Button className='sendButton hover' variant='contained' onClick={this.handleFormSubmit}>Send
                      <Icon className='rightIcon'>send</Icon>
                </Button>
                </CardActions>
              </Card>
              <Card className='card'>
                <CardContent> 
                  <Typography variant='h4' className='h4' align='center'>Lost Items</Typography>
                {this.state.items.map(item => {
                    return (
                      <List>
                      <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                          <Avatar alt="Remy Sharp" src="https://www.supervia.com.br/sites/default/files/achados_perdidos.jpg" />
                        </ListItemAvatar>
                        <ListItemText
                          primary={<b>{item.lostTitle.toString().toUpperCase()}</b>}
                          secondary={
                            <React.Fragment>
                              <Typography
                                component="span"
                                variant="body2"
                                color="textPrimary"
                              >
                                <b>Location:</b> {item.lostLocation} <b>Date:</b> {item.createdAt.toString().substring(0,10)} <b>Contact#:</b> {item.lostPhoneNumber}
                              </Typography>
                              --- {item.lostDescription}
                            </React.Fragment>
                          }
                        />
                      </ListItem>
                      <Divider variant="inset" component="li" />
                      </List>
                    );
                  })}
                  </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </React.Fragment>
    );
  }
}

export default Found;
