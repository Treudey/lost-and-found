import React from 'react';
import './style.css';

function Header(props) {
  let backgroundImage, color;
  if(props.type === 'found'){
    backgroundImage = "url('/images/found.png')";
    color = '#7FB800'
  }
  else if (props.type === 'lost'){
    backgroundImage = "url('/images/lost.png')";
    color = '#F6511D'
  }
  else if (props.type === 'profile'){
    backgroundImage = "url('/images/profile.png')";
    color = '#0D2C54'
  }
  else if (props.type === 'about'){
    backgroundImage = "url('/images/about.png')";
    color = '#0D2C54'
  }
  return (
    <div className='heroContent' style={{backgroundImage: backgroundImage, borderColor: color}}></div>
  );
}

export default Header