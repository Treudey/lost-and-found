import React, { Component } from 'react';

//Material UI Imports
import { Avatar, Button, Card, CardActions, CardContent, Container, Divider, Grid, Icon, List, ListItem, ListItemAvatar, ListItemText, TextField, Typography } from '@material-ui/core/'

import CloudUploadIcon from '@material-ui/icons/CloudUpload';

import Header from '../components/Header'
import Maps from '../components/Map'
import API from '../utils/API';
import '../App.css'
import './found.css';
import axios from 'axios';

class Found extends Component {
  state = {
    items: [],
    matchedItemsTitleLocation:[],
    matchedItemsTitle:[],
    matchedItemsLocation:[],
    title: "",
    contact: "",
    color: "",
    location: "",
    description: "",
    imageName: "",
    imageURL:"",
    imageDeleteURL:"",
    date: "",
    selectedFile: "",
    showImage: "",
    imageError:"",
    noData:""
  };

  // Callback from a <input type="file" onchange="onChange(event)">
onChange=event=> {
  //const scope = this
  var file = event.target.files[0];
  console.log(file.size);
  //var reader = new FileReader();
  // var result="";
  // reader.onload = function(e) {
  //   // The file's text will be printed here
  //   console.log(e);
  //   console.log(e.target.result);
  //   if (e.type === "load") {
  //     result = reader.result;
  //     //  let buff = new Buffer(result);
  //     //  let base64data = buff.toString('base64');
  //     scope.setState({
  //       selectedFile: result
  //      }) 
  //      console.log(result);
  //   }
  //  // result[0]=e.target.result;
    
  // }

 //reader.readAsDataURL(file);
  if(file.size<15728640)
  {
   this.setState({
    selectedFile: file
   }) 
   this.setState({
    imageName:file.value
   }) 
   this.setState({
    showImage: URL.createObjectURL(file)
   }) 
  }else{
    this.setState({
      imageError:"Please upload a image file which is less than 15MB"
     }) 
  }
   
}

  // onChangeHandler=event=>{
  //   //API.deleteAllFoundItem();  
  //   //var base64= event.target.files[0].toString('base64');
  //   console.log(event.target.files);
  //   let reader = new FileReader();
  //   let readerBinary = new FileReader();
  //   reader.readAsDataURL(event.target.files[0]);
  //   //let data = URL.createObjectURL(event.target.files[0])
  //   let fileInfo = {
  //     name: event.target.files[0].name,
  //     type: event.target.files[0].type,
  //     size: Math.round(event.target.files[0].size / 1000) + ' kB',
  //     base64: reader.result,
  //     file: event.target.files[0]
  //   };
  //   let data = reader.result;

  //   //let buff = new Buffer(data);
  //   let base64data = readerBinary.readAsBinaryString(event.target.files[0]);
  //   this.setState({
  //     showImage: URL.createObjectURL(event.target.files[0])
  //    }) 
  //   // let buff = new Buffer(data);
  //   // let base64data = buff.toString('base64');

  //   console.log('"' + data + '" converted to Base64 is "' + readerBinary.result + '"');
  //   //console.log(event.target.value)
  //   this.setState({
  //    image:event.target.value
  //   }) 
  //   this.setState({
  //     selectedFile: base64data,
  //     loaded: 0,
  //   }) 
  // }

  // onClickHandler = () => {
  //   const data = new FormData() 
  //   console.log("you are on click upload");
  //   console.log(this.state.selectedFile);
  //   data.append('file', this.state.selectedFile)
  //   axios.post("http://localhost:8000/upload", data, { // receive two parameter endpoint url ,form data 
  //     })
  //     .then(res => { // then print response status
  //       console.log(res.statusText)
  //     })
  //     console.log(this.state);
  // }

  onClickHandler = () => {
    
    //console.log("you are on click upload");
    //console.log(this.state);
    if(this.state.selectedFile!=="")
    {
    this.setState({
      imageError: "Image has been attached"
    });
    }else{
      this.setState({
        imageError: "Please upload the image file first"
      });
    }
  }



  // When the component mounts, load all found items and save them to this.state.items
  componentDidMount() {
    this.loadItems();
  }


  // Loads all items and sets them to this.state.items
  loadItems = () => {
    this.setState({ items: []});
    API.getLostItems()
      .then(res =>
        this.setState({ items: res.data})
      )
      .catch(err => console.log(err));
  };

  loadMatchedItems = () => {
    var matchedArrayTitleLocation=[];
    var matchedArrayTitle=[];
    var matchedArrayLocation=[];
    var LostArray = this.state.items;

    for(var i=0; i<LostArray.length;i++)
      {
        if(LostArray[i].lostTitle.toString().toUpperCase()===this.state.title.toString().toUpperCase() && LostArray[i].lostLocation.toString().substr(0,3).toUpperCase() ===this.state.location.toString().substr(0,3).toUpperCase())
        {
          matchedArrayTitleLocation.push(LostArray[i]);
          //console.log("found Title Location",LostArray);
        }else if(LostArray[i].lostTitle.toString().toUpperCase()===this.state.title.toString().toUpperCase())
        {
          matchedArrayTitle.push(LostArray[i]);
          //console.log("found Title Before",LostArray);
          //console.log("found Title After",LostArray);
        }else if(LostArray[i].lostLocation.toString().substr(0,3).toUpperCase() ===this.state.location.toString().substr(0,3).toUpperCase())
        {
          matchedArrayLocation.push(LostArray[i]);
          //console.log("found Location",LostArray);
        }
        
      }
      if(matchedArrayTitleLocation.length!==0 || matchedArrayTitle.length!==0 || matchedArrayLocation.length!==0)
      {
        this.setState({noData:""});
        this.setState({matchedItemsTitleLocation:matchedArrayTitleLocation});
        this.setState({matchedItemsTitle:matchedArrayTitle});
        this.setState({matchedItemsLocation:matchedArrayLocation});
        }else
        {
          this.setState({matchedItemsTitleLocation:[]});
          this.setState({matchedItemsTitle:[]});
          this.setState({matchedItemsLocation:[]});
        this.setState({noData:"We are sorry that we can't find anyone right now who has lost something that you have found. We will email you once we find to whom this belongs to."});
      }
  };

  // Handles updating component state when the user types into the input field
  handleInputChange = event => {
    const { name, value } = event.target;
    // console.log("Event.target", event.target.id);
    // console.log("NAME", name);
    // console.log("value", value);
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
        imageName: value
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
    //console.log("handleformsubmit:");
    //console.log(this.state);
    //send image to imgbb
    const data = new FormData() 
    data.append('image', this.state.selectedFile)
    axios.post('https://api.imgbb.com/1/upload?key=b343cad24f5c6798fcb6914c62d459c8', data)
    .then( res=>{
        //console.log(res);
        if(res.data.status===200)
        {
          this.setState({
            imageURL: res.data.data.display_url
          });
          
            //set Date
            var d = new Date();
            var date= d.getDate()+'-'+d.getMonth()+'-'+d.getFullYear();
          this.setState({
            date: date
          });
          
          if (this.state.title && this.state.color && this.state.location && this.state.description) {
            API.postFoundItem({
              foundTitle: this.state.title,
              foundPhoneNumber: this.state.contact,
              foundColor: this.state.color,
              foundLocation: this.state.location,
              foundDescription: this.state.description,
              foundImage: this.state.imageName,
              foundDate: this.state.date,
              foundImageURL: this.state.imageURL
            })
              .then(res => this.loadItems(), this.loadMatchedItems())
              .catch(err => console.log(err));
          }
        }else {
          this.setState({
            imageError: "Something went wrong submitting your data. Please try again."
          });
        }
    });
     
    
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
                        value={this.state.imageName} 
                        input type="file" name="file" onChange={this.onChange}
                        className='textfield'
                        id='imageItemField'
                        label='6. Image'
                        helperText='Please upload the image of the item you found in here'
                        fullWidth={true}
                        aria-describedby='image-found-helper-text'
                        InputLabelProps={{
                          shrink: true,
                        }}
                        //InputLabel htmlFor="imageItemField"
                        accept='image/*'
                      />
                      <div>
                      <img width="100px"src={this.state.showImage}/>
                      </div>
                      
                       <h6>{this.state.imageError}</h6> 
                      
                      <Button variant='contained' color='default' className='buttonUpload' onClick={this.onClickHandler}>
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
              </Grid>
          </Grid>
             
          <Grid container >
            <Grid item md={12} sm={12} xs={12}>
              <Card>
                <CardContent className='cardContent'>
                {/* Match lost function to retrieve matched items by title & location and output it on front end */}
                {this.state.matchedItemsTitleLocation.map(item => {
                    return (
                      <List>
                        <ListItem alignItems="flex-start">
                          <ListItemAvatar>
                            <Avatar alt="Remy Sharp" src="https://www.supervia.com.br/sites/default/files/achados_perdidos.jpg" />
                          </ListItemAvatar>
                          <ListItemAvatar>
                          <img width="100px"src={item.lostImageURL}/>
                          </ListItemAvatar>
                          <ListItemText
                             primary={<b><i>Lost Item That Matches Your Title and Location:</i> {item.lostTitle.toString().toUpperCase()}</b>}
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

                {/* Match lost function to retrieve matched items and output it on front end */}
                {this.state.matchedItemsTitle.map(item => {
                    return (
                      <List>
                        <ListItem alignItems="flex-start">
                          <ListItemAvatar>
                            <Avatar alt="Remy Sharp" src="https://www.supervia.com.br/sites/default/files/achados_perdidos.jpg" />
                          </ListItemAvatar>
                          <ListItemAvatar>
                          <img width="100px"src={item.lostImageURL}/>
                          </ListItemAvatar>
                          <ListItemText
                             primary={<b><i>Lost Item That Matches Your Title:</i> {item.lostTitle.toString().toUpperCase()}</b>}
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

                
                {/* Match lost function to retrieve matched items by the location and output it on front end */}
                {this.state.matchedItemsLocation.map(item => {
                    return (
                      <List>
                        <ListItem alignItems="flex-start">
                          <ListItemAvatar>
                            <Avatar alt="Remy Sharp" src="https://www.supervia.com.br/sites/default/files/achados_perdidos.jpg" />
                          </ListItemAvatar>
                          <ListItemAvatar>
                          <img width="100px"src={item.lostImageURL}/>
                          </ListItemAvatar>
                          <ListItemText
                             primary={<b><i>Lost Item That Matches Your Location:</i> {item.lostTitle.toString().toUpperCase()}</b>}
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


                  {/* <Divider variant="inset" component="li" /> */}
                  <Typography component='h1' variant='h4' align='center' gutterBottom>
                    {<b>{this.state.noData}</b>}
                  </Typography>
                  {/* Retrieve lost items and output it on front end */}
                  

                  {/* <Typography className='h4' component='h1' variant='h4' align='center' gutterBottom>
                    Search Results For All Lost Items 
                  </Typography>
                  
                  {this.state.items.map(item => {
                    return (
                      <List>
                        <ListItem alignItems="flex-start">
                          <ListItemAvatar>
                            <Avatar alt="Remy Sharp" src="https://www.supervia.com.br/sites/default/files/achados_perdidos.jpg"/>
                          </ListItemAvatar>
                          <ListItemAvatar>
                          <img width="100px"src={item.lostImageURL}/>
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
                  })}  */}
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
