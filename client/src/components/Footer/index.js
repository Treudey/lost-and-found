import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
// import "./style.css";

const useStyles = makeStyles(theme => ({
	appBar: {
    top: 'auto',
		bottom: 0,
		background: "#00A6ED",
		align: "center",
		paddingTop: "1rem",
		paddingBottom: "1rem"
  },
  root: {
		flexGrow: 1,
	},
}));

export default function Footer() {
	const classes = useStyles();
	return (
		<div className="root">
			<AppBar id="footer" position="fixed" className={classes.appBar}>
					<Typography variant="h5" className="align">
						Copyright 2019
          </Typography>
			</AppBar>
		</div>
	);
};