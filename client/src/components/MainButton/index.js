import React from "react";
import "./style.css";

function MainButton(props) {
	let address, text, color, icon;
	if (props.type === 'lost') {
		address = '/searchitem';
		text = 'Lost Something? Search It!';
		color = '#FF9F1C';
		icon = 'fab fa-searchengin fa-2x';
	} else {
		address = '/postitem';
		text = 'Found Something? Post It!';
		color = '#0D2C54';
		icon = 'fas fa-arrow-circle-up fa-2x';
	}
  return (
    <a className="button" style={{borderColor: color}} href={address}>  {text}
        {/* <i className={icon}></i> {text} */}
    </a>
  );
}

export default MainButton;