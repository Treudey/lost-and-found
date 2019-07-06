import React from "react";
// import "./LostAndFound.css";

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

const backgroundImageFound = 'https://cdn.pixabay.com/photo/2017/09/13/22/25/lost-2747288_1280.png';

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

  ///I DON'T USE THESE ANYWHERE
  // inputInfo: {
  //   // color:'#fff',
  // },
  // inputValue: {
  //   // color:'#0b2f55',
  //   // fontWeight:'bold'
  // },
  // inputlabel: {
  //   // color:'rgb(7, 31, 138)',
  //   marginRight: '10px',
  //   textShadow: '0 0 0px'
  // },
}));
//ADD Root
export default function Found() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div className={classes.heroContent}></div>
      <Container className={classes.container}>
        <Grid container className={classes.grid}>
          <Grid item md={12} sm={12} xs={12}>
            <Card>
              <CardContent className={classes.cardContent}>
                <Typography className={classes.h4} component="h1" variant="h4" align="left" gutterBottom>
                  Tell us a bit about the item you lost
                  </Typography>
                <form noValidate autoComplete="off">
                  <Grid item md={12} sm={12} xs={12} className={classes.grid}>
                    <TextField
                      className={classes.textfield}
                      id="titleItemField"
                      htmlFor="titleItem"
                      label="1. Please provide a title for the item you lost"
                      helperText="Please provide a title for the item you lost"
                      fullWidth
                      required
                      aria-describedby="title-found-helper-text"
                    />
                  </Grid>
                  <Grid item md={12} sm={12} xs={12} className={classes.grid}>
                    <TextField
                      className={classes.textfield}
                      id="locationItemField"
                      htmlFor="locationItem"
                      label="2. Please indicate the location where the item was found"
                      helperText="Please share the rough location or main intersection where you found the item"
                      fullWidth={true}
                      required={true}
                      aria-describedby="location-found-helper-text"
                    />
                  </Grid>
                  <Grid item md={12} sm={12} xs={12} className={classes.grid}>
                    <TextField
                      className={classes.textfield}
                      id="colorItemField"
                      htmlFor="colorItem"
                      label="3. Please provide the colour(s) of the item"
                      helperText="Please share the colour(s) of the item you found"
                      fullWidth={true}
                      required={true}
                      aria-describedby="color-found-helper-text"
                    />
                  </Grid>
                  <Grid item md={12} sm={12} xs={12} className={classes.grid}>
                    <TextField
                      id="descriptionItemField"
                      htmlFor="descriptionItem"
                      label="4. Please provide a description of the item"
                      helperText="Please give us little description about the item you found"
                      fullWidth={true}
                      required={true}
                      multiline={true}
                      rows="3"
                      aria-describedby="description-found-helper-text"
                      margin="normal"
                    />
                  </Grid>
                  <Grid item md={12} sm={12} xs={12} className={classes.grid}>
                    <TextField
                      className={classes.textfield}
                      id="imageItemField"
                      label="5. Please upload the image of the item you found in here"
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
                    <Button variant="contained" color="default" className={classes.button} component="span">
                      Upload
                        <CloudUploadIcon className={classes.rightIcon} />
                    </Button>
                  </Grid>
                </form>
              </CardContent>
              <CardActions>
                <Button className={classes.sendButton} variant="contained" color="#7FB800" >Send
                      <Icon className={classes.rightIcon}>send</Icon>
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}