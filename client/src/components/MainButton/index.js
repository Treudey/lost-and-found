import React from 'react';

import Button from '@material-ui/core/Button'

import './style.css';

function MainButton(props) {
	let address, text, color;
	if (props.type === 'lost') {
		address = '/searchitem';
		text = 'Lost Something?';
		color = '#7FB800';
	} else {
		address = '/postitem';
		text = 'Found Something?';
		color = '#F6511D';
	}
  return (
    <Button className='buttonMain' style={{backgroundColor: color}} href={address} variant='contained'> {text}
    </Button>
  );
}

export default MainButton;