import React from 'react';
import MainButton from '../components/MainButton';
import './Home.css';
import Typography from '@material-ui/core/Typography';

export default function Home() {
  return (
    <React.Fragment>
      <div className="left"></div>
      <div className="right">
        <Typography className='heading' variant='h4' align='center'>The internet's most comprehensive lost & found web app</Typography>
        <MainButton className='button-container' type='lost' />
        <MainButton type='found' />
      </div>
    </React.Fragment>
  )
}