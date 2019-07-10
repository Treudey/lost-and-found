import React, { Component } from 'react';

//Material UI Imports
import { Avatar, Button, Card, CardContent, Container, Divider, Grid, InputAdornment, List, ListItemAvatar, ListItemText, ListItem, TextField, Typography } from '@material-ui/core/'

import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Search from '@material-ui/icons/Search';

//Import Files
import Header from '../components/Header'
import Maps from '../components/Map'
import API from '../utils/API';
import './lost.css';

class Lost extends Component {
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

  // When the component mounts, load all lost items and save them to this.state.items
  componentDidMount() {
    this.loadItems();
  }


  // Loads all items and sets them to this.state.items
  loadItems = () => {
    API.getFoundItems()
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

  // When the form is submitted, use the API.postLostItem method to save the book data
  // Then reload books from the database
  handleFormSubmit = event => {
    event.preventDefault();
    console.log("handleformsubmit:");
    console.log(this.state);
    // debugger;
    if (this.state.title && this.state.color && this.state.location && this.state.description) {
      API.postLostItem({
        lostTitle: this.state.title,
        lostPhoneNumber: this.state.contact,
        lostColor: this.state.color,
        lostLocation: this.state.location,
        lostDescription: this.state.description,
        lostImage: this.state.image,
        lostDate: this.state.date
      })
        .then(res => this.loadItems())
        .catch(err => console.log(err));
    }
  };


  render() {
    return (
      <React.Fragment>
        <Header type='lost' />
        <Container className='container'>
          <Grid container >
            <Grid item md={12} sm={12} xs={12}>
              <Card className='card'>
                <CardContent className='cardContent'>
                  <Typography className='h4' component='h1' variant='h4' align='center' gutterBottom>
                    Tell us a bit about the item you lost
                  </Typography>
                  <form noValidate autoComplete='off'>
                    <Grid item sm={12} xs={12} className='grid'>
                      <TextField
                        onChange={this.handleInputChange}
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
                      <Grid item md={12} sm={12} xs={12} className='grid'>
                        <TextField
                          value={this.state.title}
                          onChange={this.handleInputChange}
                          id="titleItemField"
                          name="titleItemField"
                          htmlFor="titleItem"
                          label="1. Title"
                          helperText="Please provide a title for the item you lost"
                          fullWidth
                          required
                          aria-describedby="title-lost-helper-text"
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
                      <Grid item md={12} sm={12} xs={12}>
                        <TextField
                          value={this.state.location}
                          onChange={this.handleInputChange}
                          id="locationItemField"
                          name="locationItemField"
                          htmlFor="locationItem"
                          label="3. Postal Code"
                          helperText="Please share the postal code where you lost the item by dragging pin on the map below"
                          fullWidth={true}
                          required={true}
                          aria-describedby="location-lost-helper-text"
                        />
                        <Maps
                          google={this.props.google}
                          center={{ lat: 43.662609, lng: -79.397849 }}
                          height='300px'
                          zoom={15}
                        />
                      </Grid>
                      <Grid item md={12} sm={12} xs={12}>
                        <TextField
                          value={this.state.color}
                          onChange={this.handleInputChange}
                          id="colorItemField"
                          name="colorItemField"
                          htmlFor="colorItem"
                          label="4. Color(s)"
                          helperText="Please share the colour(s) of the item you lost"
                          fullWidth={true}
                          required={true}
                          aria-describedby="color-lost-helper-text"
                        />
                      </Grid> <Grid item md={12} sm={12} xs={12}>
                        <TextField
                          value={this.state.description}
                          onChange={this.handleInputChange}
                          id="descriptionItemField"
                          name="descriptionItemField"
                          htmlFor="descriptionItem"
                          label="5. Description"
                          helperText="Please give us little description about the item you lost"
                          fullWidth={true}
                          required={true}
                          multiline={true}
                          rows="3"
                          aria-describedby="description-lost-helper-text"
                          margin="normal"
                        />
                      </Grid>
                      <Grid item md={12} sm={12} xs={12} className='grid'>
                        <TextField
                          className='textfield'
                          id='imageItemField'
                          label='6. Image'
                          helperText='Please upload the image of the item you lost in here'
                          fullWidth={true}
                          disabled={true}
                          aria-describedby='image-lost-helper-text'
                          InputLabelProps={{
                            shrink: true,
                          }}
                          accept='image/*'
                          multiple
                          type='file'
                        />
                        <Button variant='contained' color='default' className='buttonUpload'>
                          Upload
                        <CloudUploadIcon className='rightIcon' />
                        </Button>
                      </Grid>
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
              <Card>
                <CardContent className='cardContent'>
                  <Typography className='h4' component='h1' variant='h4' align='center' gutterBottom>
                    Search Results For Found Items
                  </Typography>
                  {this.state.items.map(item => {
                    return (
                      <List>
                        <ListItem alignItems="flex-start">
                          <ListItemAvatar>
                            <Avatar alt="Remy Sharp" src="https://www.supervia.com.br/sites/default/files/achados_perdidos.jpg" />
                          </ListItemAvatar>
                          <ListItemText
                            primary={item.foundTitle}
                            secondary={
                              <React.Fragment>
                                <Typography
                                  component="span"
                                  variant="body2"
                                  color="textPrimary"
                                >
                                  Location: {item.foundLocation} Date: {item.foundDate}
                                </Typography>
                                --- {item.foundDescription}
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
  };
}
export default Lost;