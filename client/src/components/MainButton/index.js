import React from 'react';
import Button from '@material-ui/core/Button'
import { Link } from "react-router-dom";
import './style.css';

function MainButton(props) {
	let address, text, color;
	if (props.type === 'lost') {
		address = '/searchitem';
		text = 'Lost Something?';
		color = '#F6511D';
	} else {
		address = '/postitem';
		text = 'Found Something?';
		color = '#7FB800';
	}
  return (
    <Button className='buttonMain' style={{backgroundColor: color}} component={Link} to={address} variant='contained'> {text}
    </Button>
  );
}

export default MainButton;