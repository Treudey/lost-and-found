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
		align: "center"
  },
  root: {
		flexGrow: 1,
	},
	typography: {
		align: "center"
	}
}));

export default function Footer() {
	const classes = useStyles();
	return (
		<div className="root">
			<AppBar id="footer" position="fixed" className={classes.appBar}>
				<Toolbar>
					<div className={classes.typography}>
					<Typography variant="h5" align="center" id="text">
						Copyright 2019
              </Typography>
							</div>
				</Toolbar>
			</AppBar>
		</div>
	);
};