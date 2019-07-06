import React, { Component } from "react";
import MainButton from "../components/MainButton";
import { Route, Link } from "react-router-dom"
import "./Home.css";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid'

const backgroundImage = 'http://lafprevention.org/wp-content/uploads/2018/05/Lostandfound_logo_fullcolor2.jpg';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  heroContent: {
    marginTop: theme.spacing(10),
    backgroundImage: `url(${backgroundImage})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    height: '30vh',
    display: 'flex',
    flexDirection: 'column',
  },
  h4: {
    color: "#F6511D",
    paddingBottom: theme.spacing(5),
    [theme.breakpoints.between("xs", "sm")]:
    {
      paddingBottom: theme.spacing(0)
    },
  },
  grid: {
    marginLeft: "25rem",
    marginTop: theme.spacing(3)
  },
  image: {
    marginRight: theme.spacing(3),
    marginTop: theme.spacing(1),
    boxShadow: "2px 2px 2px 2px #555"
  }
}));

export default function Home() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div className={classes.heroContent}></div>
      {/* <div className={classes.root}> */}
      <Typography className={classes.h4} component="h1" variant="h4" align="center">The internet's most comprehensive lost & found web app</Typography>
      {/* <div className="button-container"> */}
      <MainButton className="button-container" type="lost" />
      <MainButton type="found" />
      <div>
        <img className={classes.image} src="https://i2.wp.com/www.hillelementary.com/wp-content/uploads/2017/12/lost-and-found.png?fit=340%2C340&ssl=1" height="250"/>
        <img className={classes.image} src="https://lostandfounddecor.com/wp-content/uploads/2018/04/Lost-and-Found-Logo-Square-300.png" height="250"/>
        <img className={classes.image} src="http://burnhamplan100.lib.uchicago.edu/files/images/Lost%20&%20Found%20Logo%20Color%202.jpg" height="250"/>
      </div>
    </React.Fragment>
  );
}