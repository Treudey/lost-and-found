import React from "react";
import "./LostAndFound.css";
import Container from '@material-ui/core/Container';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon'; 


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        marginLeft:'10px',
        
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'left',
        color: '#fff',
        backgroundColor: '#e7cabc',
        textShadow:'0 0 5px rgb(104, 100, 100)'
    },
    textfield: {
        width:'80vw',   
        borderRadius:'5px', 
        marginBottom:'10px',
        padding:theme.spacing(1),
        backgroundColor: '#a1b4d5',
        textShadow:'0 0 5px rgb(104, 100, 100)'
        
    },
    inputInfo:{
        color:'#fff',
        
    },
    inputValue:{
        color:'#0b2f55',
        fontWeight:'bold'

    },
    rightIcon: {
        marginLeft: theme.spacing(1),
    },
    button: {
       // marginLeft: theme.spacing(1),
        marginTop: theme.spacing(1),
    },
    inputlabel:{
        color:'rgb(7, 31, 138)',
        marginRight:'10px',
        textShadow:'0 0 0px'

    },
  }));

export function Found() {
    const classes = useStyles();
    return (
        <Container class="containerTop" spacing={10}>
            <div class="row" id="topNavbar">
               {/* <div class="col-md-1"></div> */}
               <div id="navText">Found</div>
               {/* <div class="col-md-1"></div> */}
             </div>
             <Grid id="infoGrid" container spacing={0}>
             {/* <Grid item xs></Grid> */}
            <Grid item xs={12} className={classes.grid}>
            <Paper id="infoTitle" className={classes.paper}>Please tell us some features about the item you found</Paper>
            </Grid>
            {/* <Grid item xs></Grid> */}
            </Grid>
           

            <form className={classes.container} noValidate autoComplete="off">
            <FormControl id="locationItemField" className={classes.textfield} variant="filled">
            <InputLabel className={classes.inputlabel} htmlFor="locationItem">1. Write the location of the item found in here</InputLabel>
            <Input className={classes.inputValue} id="locationItem" aria-describedby="location-helper-text" />
            <FormHelperText className={classes.inputInfo}  id="location-helper-text">Please share the rough location or main intersection where you found the item</FormHelperText>
            </FormControl>
            
            <FormControl id="colorItemField" className={classes.textfield} variant="filled">
            <InputLabel className={classes.inputlabel} htmlFor="colorItem">2. Write the color of the item found in here</InputLabel>
            <Input className={classes.inputValue} id="colorItem" aria-describedby="color-helper-text" />
            <FormHelperText className={classes.inputInfo} id="color-helper-text">Please share the color of the item you found</FormHelperText>
            </FormControl>

            <FormControl id="descriptionItemField" className={classes.textfield} variant="filled">
            <InputLabel className={classes.inputlabel} htmlFor="descriptionItem">3. Write the discription of the item found in here</InputLabel>
            <Input multiline rows="4" className={classes.inputValue} id="descriptionItem" aria-describedby="description-helper-text" />
            <FormHelperText className={classes.inputInfo} id="description-helper-text">Please give us little discription about the item you found</FormHelperText>
            </FormControl>

            <Input disableUnderline="true" disabled="true"/>

            <FormControl id="descriptionItemField" className={classes.textfield} variant="filled">
            <InputLabel className={classes.inputlabel} htmlFor="descriptionItem">4. Please upload the image of the item you found in here (optional)</InputLabel>
            <Input disableUnderline="true" disabled="true"/>
            <input
                accept="image/*"
                className={classes.input}
                id="image-file"
                multiple
                type="file"
            />
            <label htmlFor="image-file">
                <Button variant="outlined" component="span" className={classes.button}>
                Upload
                </Button>
            </label>
            </FormControl>

            <Input disableUnderline="true" disabled="true"/>
            
            <Button variant="contained" color="primary" className={classes.button}>
                Send
                {/* This Button uses a Font Icon, see the installation instructions in the docs. */}
                <Icon className={classes.rightIcon}>send</Icon>
            </Button>
            </form>

        </Container>
    );
  }
  
  export default Found;