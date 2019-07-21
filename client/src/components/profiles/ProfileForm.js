import React, { useState, useContext, useEffect } from 'react';
import ProfileContext from '../../context/profile/profileContext';
import Maps from '../Map'

//Material UI Imports

import { makeStyles } from '@material-ui/core/styles';
import { spacing } from '@material-ui/system';

import { Button, Card, CardActions, CardContent, Grid, Icon, TextField, Typography } from '@material-ui/core/';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

//Styles
/*
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: "column"
  },
  heroContent: {
    marginTop: theme.spacing(4),
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
*/

const ProfileForm = (props) => {
  const profileContext = useContext(ProfileContext);

  const { addProfile, updateProfile, clearCurrent, current } = profileContext;


  useEffect(() => {
    if (current !== null) {
      setProfile(current);
    } else {
      setProfile({
        foundTitle: '',
        foundPhoneNumber: '',
        foundColor: '',
        foundLocation: '',
        foundDescription: '',
        foundImage: '',
        foundDate: ''
      });
    }
  }, [profileContext, current]);

  const [profile, setProfile] = useState({
    foundTitle: '',
    foundPhoneNumber: '',
    foundColor: '',
    foundLocation: '',
    foundDescription: '',
    foundImage: '',
    foundDate: ''
  });

  const {foundTitle, foundPhoneNumber, foundDate, foundColor, foundLocation, foundDescription, foundImage } = profile;

  const onChange = e =>
    setProfile({ ...profile, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    console.log("handleformsubmit:");
    console.log(profile);
    if (current === null) {
      addProfile(profile);
    } else {
      updateProfile(profile);
    }
    clearAll();
  };

  const clearAll = () => {
    clearCurrent();
  };

  return (
    <Card className="card">
      <CardContent className="cardContent">
        <Typography component="h1" variant="h4" className='h4' gutterBottom>
          Tell us a bit about the item you found
          </Typography>
        <form noValidate autoComplete='off'>
          <Grid item md={12} sm={12} xs={12} className='grid'>
            <TextField
              value={foundTitle}
              onChange={onChange}
              name='foundTitle'
              id='titleItemField'
              htmlFor='titleItem'
              label='1. Title'
              helperText='Please provide a title for the item you found'
              fullWidth
              required
              aria-describedby='title-found-helper-text'
            />
          </Grid>
          <Grid item md={12} sm={12} xs={12} className='grid'>
              <TextField
                value={foundPhoneNumber}
                onChange={onChange}
                name='foundPhoneNumber'
                id="contactItemField"
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
              value={foundLocation}
              onChange={onChange}
              name='foundLocation'
              id='locationItemField'
              htmlFor='locationItem'
              label='3. Postal Code'
              helperText='Please share (or copy & paste) the postal code where you found the item by dragging pin on the map below'
              fullWidth={true}
              required={true}
              aria-describedby='location-found-helper-text'
            />
            <Maps
              google={props.google}
              center={{ lat: 43.662609, lng: -79.397849 }}
              height='300px'
              zoom={15}
            />
          </Grid>
          <Grid item md={12} sm={12} xs={12} className='grid'>
            <TextField
              value={foundColor}
              onChange={onChange}
              name='foundColor'
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
              value={foundDescription}
              onChange={onChange}
              name='foundDescription'
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
              value={foundImage}
              onChange={onChange}
              name='foundImage'
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
            <Button variant='contained' color='default' className='buttonUpload'>
              Upload
              <CloudUploadIcon className='rightIcon' />
            </Button>
          </Grid>
        </form>
      </CardContent>
      <CardActions> <Button className='sendButton' variant='contained' onClick={onSubmit}>Send
            <Icon className='rightIcon'>send</Icon>
      </Button>
      </CardActions>
    </Card>
  );
};

export default ProfileForm;
