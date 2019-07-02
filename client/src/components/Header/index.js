import React from "react";
import Typography from '@material-ui/core/Typography';
import "./style.css";

export default function Header () {
  return (
    <div className="img">
      {/* Increase the network loading priority of the background image. */}
      <Typography color="inherit" align="center" variant="h2" marked="center">
        Upgrade your Sundays
      </Typography>
      <Typography color="inherit" align="center" variant="h5">
        Enjoy secret offers up to -70% off the best luxury hotels every Sunday.
      </Typography>
      {/* <Button
        color="secondary"
        variant="contained"
        size="large"
        className={classes.button}
        component="a"
        href="/premium-themes/onepirate/sign-up/"
      >
        Register
      </Button> */}
      </div>
  );
}