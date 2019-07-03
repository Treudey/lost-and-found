import React from "react";
import "./style.css";

function MainButton(props) {
	let address, text, color, icon;
	if (props.type === 'lost') {
		address = '/searchitem';
		text = 'Lost Something? Search It!';
		color = '#FF9F1C';
		icon = 'fab fa-searchengin';
	} else {
		address = '/postitem';
		text = 'Found Something? Post It!';
		color = '#0D2C54';
		icon = 'fas fa-arrow-circle-up';
	}
  return (
    <a className="button" style={{background: color}} href={address}>
        <i className={icon}></i> {text}
    </a>
  );
}

export default MainButton;