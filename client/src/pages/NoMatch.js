// import React from "react";

// function NoMatch() {
//   return (
//     <div>
//       <h1>404 Page Not Found</h1>
//       <h1>
//         <span role="img" aria-label="Face With Rolling Eyes Emoji">
//           🙄
//         </span>
//       </h1>
//     </div>
//   );
// }

import React from 'react';

//Material UI Imports
import {Button, Card,  CardContent, CardMedia,  Container, Grid, InputAdornment, TextField, Typography} from '@material-ui/core/'

import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Search from '@material-ui/icons/Search';

//Import Files
import Header from '../components/Header'
import './lost.css';
//Import Files
import './nomatch.css';


export default function NoMatch() {


  return (
    <React.Fragment>
      <Header type='lost'/>
      <Container className='container'>
        <Grid container >
          <Grid item md={12} sm={12} xs={12}>
          
                
          <div img="https://www.iamsterdam.com/media/logos-icons-stamps-graphics/lost-and-found-logo.jpg?as=false&h=338&w=600&iar=true"></div>
          
          </Grid>
        </Grid>
        {/* <Grid container >
          <Grid item md={12} sm={12} xs={12}> */}
           
              
            
          {/* </Grid>
        </Grid> */}
      </Container>
    </React.Fragment>
  );
}