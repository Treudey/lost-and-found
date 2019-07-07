import React from 'react';
import './style.css';

function Header(props) {
  let backgroundImage, color;
  if(props.type === 'found'){
    backgroundImage = "url('https://cdn.pixabay.com/photo/2017/09/13/22/25/lost-2747288_1280.png')";
    color = '#7FB800'
  }
  else if (props.type === 'lost'){
    backgroundImage = "url('https://cdn.pixabay.com/photo/2017/09/13/22/25/lost-2747289_1280.png')";
    color = '#F6511D'
  }
  return (
    <div className='heroContent' style={{backgroundImage: backgroundImage, borderColor: color}}></div>
  );
}

export default Header