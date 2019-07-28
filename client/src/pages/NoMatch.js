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
import { Button, Card, CardContent, CardMedia, Container, Grid, InputAdornment, TextField, Typography } from '@material-ui/core/'


//Import Files
import Header from '../components/Header'

//Import Files
import './nomatch.css';


export default function NoMatch() {

    return (
        <React.Fragment>
            <Grid container justify='center' >
                <Grid item md={8} sm={12} xs={12}>
                    <img src='/images/404_43.gif' />
                </Grid>
            </Grid>
        </React.Fragment>
    );
}