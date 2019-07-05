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


const backgroundImageLost = 'https://cdn.pixabay.com/photo/2017/09/13/22/25/lost-2747289_1280.png';

//Styles
const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },

    heroContent: {
        marginTop: theme.spacing(4),
        backgroundImage: `url(${backgroundImageLost})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        height: '30vh',
        display: 'flex',
        flexDirection: 'column',
        borderBottomColor: "#F6511D",
        borderBottomStyle: "solid"
    },
    h4: {
        color: "#FF9F1C",
        paddingBottom: theme.spacing(3)
    },
    grid: {
        marginBottom: "3rem"
    },
    container: {
        // display: 'flex',
        // flexWrap: 'wrap',
        marginTop: '5%'

    },
    textfield: {
        marginBottom: '10px',
        padding: theme.spacing(4),
    },
    rightIcon: {
        marginLeft: theme.spacing(1),
    },
    button: {
        marginTop: theme.spacing(1),
    },
    sendButton: {
        backgroundColor: "#F6511D",
        marginLeft: theme.spacing(2),
        marginBottom: theme.spacing(2),
    },
    cardContent: {
        marginLeft: theme.spacing(8),
        marginTop: theme.spacing(2),
    },
}));

export default function Found() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <div className={classes.heroContent}></div>
            <Container className={classes.container}>
                <Grid container className={classes.grid}>
                    <Grid item md={8}>
                        <Card>
                            <CardContent className={classes.cardContent}>
                                <Typography className={classes.h4} component="h1" variant="h4" align="left" gutterBottom>
                                    Tell us a bit about the item you lost
                                </Typography>
                                <form noValidate autoComplete="off">
                                <Grid container className={classes.grid}>
                                        <Grid item md={11}>
                                            <TextField
                                                id="standard-full-width"
                                                htmlFor="titleItem"
                                                placeholder="1. Please provide a title for the item you lost"
                                                helperText="Please provide a title for the item you lost"
                                                fullWidth
                                                required
                                                aria-describedby="location-helper-text"
                                                InputLabelProps={{
                                                    shrink: true
                                                }}
                                            />
                                        </Grid>
                                    </Grid>
                                    <Grid container className={classes.grid}>
                                        <Grid item md={11}>
                                            <TextField
                                                id="standard-full-width"
                                                htmlFor="locationItem"
                                                placeholder="2. Please indicate the location where the item was lost"
                                                helperText="Please share the rough location or main intersection where you lost the item"
                                                fullWidth
                                                required
                                                aria-describedby="location-helper-text"
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                            />
                                        </Grid>
                                    </Grid>
                                    <Grid container className={classes.grid}>
                                        <Grid item md={11}>
                                            <TextField
                                                id="standard-full-width"
                                                htmlFor="colorItem"
                                                placeholder="3. Please provide the colour(s) of the item"
                                                helperText="Please share the colour(s) of the item you found"
                                                fullWidth
                                                required
                                                aria-describedby="location-helper-text"
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                            />
                                        </Grid>
                                    </Grid>
                                    <Grid container className={classes.grid}>
                                        <Grid item md={11}>
                                            <TextField
                                                id="standard-full-width"
                                                htmlFor="descriptionItem"
                                                placeholder="4. Please provide a description of the item"
                                                helperText="Please give us little discription about the item you lost"
                                                fullWidth
                                                required
                                                multiline
                                                aria-describedby="location-helper-text"
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                            />
                                        </Grid>
                                    </Grid>
                                    <Grid container className={classes.grid}>
                                        <Grid item md={11}>
                                            <TextField
                                                id="standard-full-width"
                                                placeholder="5. Please upload the image of the item you lost in here"
                                                helperText="Please upload the image of the item you lost in here"
                                                fullWidth
                                                aria-describedby="location-helper-text"
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                                accept="image/*"
                                                className={classes.input}
                                                multiple
                                                type="file"
                                            />
                                            <Button variant="contained" color="default" className={classes.button} component="span">
                                                Upload
                                <CloudUploadIcon className={classes.rightIcon} />
                                            </Button>
                                        </Grid>
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