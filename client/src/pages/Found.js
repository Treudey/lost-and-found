import React, { Component } from "react";
// import "./foundAndFound.css";

//Material UI Imports
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import API from '../utils/API';
import ListItem from '@material-ui/core/ListItem'
import List from '@material-ui/core/List'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import Divider from '@material-ui/core/Divider'
import { spacing } from '@material-ui/system';
import Maps from '../components/Map'

const backgroundImageFound = 'https://cdn.pixabay.com/photo/2017/09/13/22/25/found-2747288_1280.png';

//Styles
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: "column"
  },
  heroContent: {
    marginTop: theme.spacing(4),
    backgroundImage: `url(${backgroundImageFound})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    height: '30vh',
    display: 'flex',
    flexDirection: 'column',
    borderBottomColor: "#7FB800",
    borderBottomStyle: "solid",
  },
  h4: {
    color: "#FF9F1C",
    paddingBottom: theme.spacing(3),
    textAlign: "center",
    [theme.breakpoints.between("xs","sm")]: 
    {
      paddingBottom: theme.spacing(0)
  },
},
  grid: {
    marginBottom: "3rem",
    [theme.breakpoints.between("xs","sm")]: 
     {
      marginBottom: theme.spacing(1)
     },
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: '5%',
  },
  rightIcon: {
    marginLeft: theme.spacing(1),
  },
  button: {
    marginTop: theme.spacing(1),
  },
  sendButton: {
    backgroundColor: "#7FB800",
    marginLeft: theme.spacing(2),
    marginBottom: theme.spacing(1),
    [theme.breakpoints.between("xs", "sm")]:
      {
        marginLeft: theme.spacing(1),
      }
  },
  cardContent: {
    marginTop: theme.spacing(2),
  },
  card: {
    padding: theme.spacing(2),
    boxShadow: "2px 2px 2px 2px #555",
  },
  textfield: {
    padding: theme.spacing(1),
  },

}));

class Found extends Component {
    state = {
      items: [],
      title: "",
      contact:"",
      color: "",
      location: "",
      description: "",
      image: "",
      date:""
    };
  
  // When the component mounts, load all found items and save them to this.state.items
  componentDidMount() {
  this.loadItems();
  }
  
  
  // Loads all items and sets them to this.state.items
  loadItems = () => {
  API.getLostItems()
    .then(res =>
      this.setState({ items: res.data, title: "", color: "", location: "", description: "", image: "", date:""  })
    )
    .catch(err => console.log(err));
  };  
  
  // Handles updating component state when the user types into the input field
    handleInputChange = event => {
      const { name, value } = event.target;
      console.log("Event.target", event.target.id);
      console.log("NAME", name);
      console.log("value", value);
      if(event.target.id==="titleItemField")
      {
      this.setState({
        title: value });
      }else if(event.target.id==="locationItemField")
      {
        this.setState({
          location: value });
      }else if(event.target.id==="colorItemField")
      {
        this.setState({
          color: value });
      }else if(event.target.id==="descriptionItemField")
      {
        this.setState({
          description: value });
      }else if(event.target.id==="imageItemField")
      {
        this.setState({
          image: value });
      }else if(event.target.id==="contactItemField")
      {
        this.setState({
          contact: value });
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
      lostPhoneNumber: this.state.contact,
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
    //console.log("State", this.state);
    
    return (
      
      <React.Fragment>
        <div ></div>
        <Container>
          <Grid container>
            <Grid item md={12} sm={12} xs={12}>
              <Card>
                <CardContent>
                  <Typography component="h1" variant="h4" align="left" gutterBottom>
                    Tell us a bit about the item you found
                    </Typography>
                  <form validate autoComplete="off">
                    <Grid item md={12} sm={12} xs={12}>
                      <TextField
                        // className={classes.textfield}
                        value={this.state.title}
                        onChange={this.handleInputChange}
                        id="titleItemField"
                        name="titleItemField"
                        htmlFor="titleItem"
                        label="1. Title"
                        helperText="Please provide a title for the item you found"
                        fullWidth
                        required
                        aria-describedby="title-found-helper-text"
                      />
                    </Grid>
                    <Grid item md={12} sm={12} xs={12}>
                      <TextField
                        // className={classes.textfield}
                        value={this.state.contact}
                        onChange={this.handleInputChange}
                        id="contactItemField"
                        name="contactItemField"
                        htmlFor="contactItem"
                        label="2. Contact Number"
                        helperText="Please provide a your contact number where person can reach you"
                        fullWidth
                        required
                        aria-describedby="contact-found-helper-text"
                      />
                    </Grid>

                    <CardContent>
                        <Maps
                    google={this.props.google}
                    center={{lat: 43.662609, lng: -79.397849}} 
                    height='300px'
                    zoom={15}
                    />
                   </CardContent>
                   
                    <Grid item md={12} sm={12} xs={12}>
                      <TextField
                        // className={classes.textfield}
                        value={this.state.location}
                        onChange={this.handleInputChange}
                        id="locationItemField"
                        name="locationItemField"
                        htmlFor="locationItem"
                        label="3. Location"
                        helperText="Please share the postal code where you found the item by dragging pin on map above"
                        fullWidth={true}
                        required={true}
                        aria-describedby="location-found-helper-text"
                      />
                    </Grid>
                   
                    <Grid item md={12} sm={12} xs={12}>
                      <TextField
                        // className={classes.textfield}
                        value={this.state.color}
                        onChange={this.handleInputChange}
                        id="colorItemField"
                        name="colorItemField"
                        htmlFor="colorItem"
                        label="4. Color(s)"
                        helperText="Please share the colour(s) of the item you found"
                        fullWidth={true}
                        required={true}
                        aria-describedby="color-found-helper-text"
                      />
                    </Grid>
                    <Grid item md={12} sm={12} xs={12}>
                      <TextField
                        value={this.state.description}
                        onChange={this.handleInputChange}
                        id="descriptionItemField"
                        name="descriptionItemField"
                        htmlFor="descriptionItem"
                        label="5. Description"
                        helperText="Please give us little description about the item you found"
                        fullWidth={true}
                        required={true}
                        multiline={true}
                        rows="3"
                        aria-describedby="description-found-helper-text"
                        margin="normal"
                      />
                    </Grid>
                    <Grid item md={12} sm={12} xs={12}>
                      <TextField
                        // className={classes.textfield}
                        value={this.state.image}
                        onChange={this.handleInputChange}
                        id="imageItemField"
                        name="imageItemField"
                        label="6. Image (optional)"
                        helperText="Please upload the image of the item you found in here"
                        fullWidth={true}
                        disabled={true}
                        aria-describedby="image-found-helper-text"
                        InputLabelProps={{
                          shrink: true,
                        }}
                        accept="image/*"
                        multiple
                        type="file"
                      />
                      <Button variant="contained" color="default" component="span">
                        Upload
                          <CloudUploadIcon/>
                      </Button>
                    </Grid>
                  </form>
                </CardContent>
                <CardActions>
                  <Button variant="contained" color="#7FB800" onClick={this.handleFormSubmit}>Send
                        <Icon>send</Icon>
                        
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
              
         <CardContent>
          {this.state.items.map(item => {
                    return (
                      <List>
                      <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                          <Avatar alt="Remy Sharp" src="https://www.supervia.com.br/sites/default/files/achados_perdidos.jpg" />
                        </ListItemAvatar>
                        <ListItemText
                          primary={item.lostTitle}
                          secondary={
                            <React.Fragment>
                              <Typography
                                component="span"
                                variant="body2"
                                color="textPrimary"
                              >
                                Location: {item.lostLocation} Date: {item.lostDate}
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
        </Container>
      </React.Fragment>
    );
    }
  }

  export default Found;