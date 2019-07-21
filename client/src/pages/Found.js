import React, { Component } from 'react';
import AuthContext from '../context/auth/authContext';
import Header from '../components/Header'
import ProfileForm from '../components/profiles/ProfileForm';
import API from '../utils/API';
import './found.css';

//Material UI Imports
import { Avatar, Card, CardContent, Container, Divider, Grid, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@material-ui/core/'

class Found extends Component {
  state = {
    items: [],
  };

  // When the component mounts, load all found items and save them to this.state.items
  componentDidMount() {
    const authContext = this.context;
    authContext.loadUser();
    this.loadItems();
  }

  // Loads all items and sets them to this.state.items
  loadItems = () => {
    API.getLostItems()
      .then(res =>
        this.setState({ items: res.data, title: "", color: "", location: "", description: "", image: "", date: "" })
      )
      .catch(err => console.log(err));
  };

  render() {
    return (
      <React.Fragment>
        <Header type='found' />
        <Container className="container">
          <Grid container>
            <Grid item md={12} sm={12} xs={12}>
              <ProfileForm google={this.props.google}/>
              <Card>
                <CardContent> 
                  <Typography variant='h4' className='h4'>Lost Items</Typography>
                {this.state.items.map(item => {
                    return (
                      <List>
                      <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                          <Avatar alt="Remy Sharp" src="https://www.supervia.com.br/sites/default/files/achados_perdidos.jpg" />
                        </ListItemAvatar>
                        <ListItemText
                          primary={<b>{item.lostTitle.toString().toUpperCase()}</b>}
                          secondary={
                            <React.Fragment>
                              <Typography
                                component="span"
                                variant="body2"
                                color="textPrimary"
                              >
                                <b>Location:</b> {item.lostLocation} <b>Date:</b> {item.createdAt.toString().substring(0,10)} <b>Contact#:</b> {item.lostPhoneNumber}
                              </Typography>
                              --- {item.lostDescription}
                            </React.Fragment>
                          }
                        />
                      </ListItem>
                      <Divider variant="inset" component="li" />
                      </List>
                    );
                  })}
                  </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </React.Fragment>
    );
  }
}

Found.contextType = AuthContext;

export default Found;
