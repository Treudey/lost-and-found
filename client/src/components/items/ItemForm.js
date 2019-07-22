import React, { useState, useContext, useEffect } from 'react';
import ItemContext from '../../context/item/itemContext';

//Material UI Imports
import { makeStyles } from '@material-ui/core/styles';
import { spacing } from '@material-ui/system';

import { Button, Card, CardContent, Container, CssBaseline, Grid, TextField, Typography } from '@material-ui/core/'

//Styles
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: "column"
  },
  heroContent: {
    marginTop: theme.spacing(4),
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    height: '30vh',
    display: 'flex',
    flexDirection: 'column',
    borderBottomColor: "#7FB800",
    borderBottomStyle: "solid",
  },
  h4: {
    color: "#FF9F1C",
    paddingBottom: theme.spacing(3),
    textAlign: "center",
    [theme.breakpoints.between("xs","sm")]: 
    {
      paddingBottom: theme.spacing(0)
  },
},
  grid: {
    marginBottom: "3rem",
    [theme.breakpoints.between("xs","sm")]: 
     {
      marginBottom: theme.spacing(1)
     },
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: '5%',
  },
  rightIcon: {
    marginLeft: theme.spacing(1),
  },
  button: {
    marginTop: theme.spacing(1),
  },
  sendButton: {
    backgroundColor: "#7FB800",
    marginLeft: theme.spacing(2),
    marginBottom: theme.spacing(1),
    [theme.breakpoints.between("xs", "sm")]:
      {
        marginLeft: theme.spacing(1),
      }
  },
  cardContent: {
    marginTop: theme.spacing(2),
  },
  card: {
    padding: theme.spacing(2),
    boxShadow: "2px 2px 2px 2px #555",
  },
  textfield: {
    padding: theme.spacing(1),
  },

}));


const ItemForm = () => {
  const itemContext = useContext(ItemContext);

  const { addItem, updateItem, clearCurrent, current } = itemContext;


  useEffect(() => {
    if (current !== null) {
      setItem(current);
    } else {
      setItem({
        name: '',
        email: '',
        type: 'lost',
        location:'',
        description:''
      });
    }
  }, [itemContext, current]);

  const [item, setItem] = useState({
    name: '',
    email: '',
    type: 'lost',
    location:'',
    description:''
  });

  const { name, email, type,location,description } = item;

  const onChange = e =>
    setItem({ ...item, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (current === null) {
      addItem(item);
    } else {
      updateItem(item);
    }
    clearAll();
  };

  const clearAll = () => {
    clearCurrent();
  };

  return (
    <React.Fragment>
      <div className='formcontainer'>
      <Container>
        <Grid >
          <Grid item md={12} sm={12} xs={12}>
            <Card classname="formcard" >
              <CardContent>
                <h2>{current ? 'Edit Item' : 'Add Item'}</h2>
                <form validate autoComplete="off" onSubmit={onSubmit}>
                  <Grid item md={12} sm={12} xs={12}>
                    <TextField
                      value={name}
                      onChange={onChange}
                      name='name'
                      label='Item'
                      helperText='Please tell us what you found or lost'
                      fullWidth
                      required
                      aria-describedby="title-helper-text"
                    />
                  </Grid>

                  <Grid item md={12} sm={12} xs={12}>
                    <TextField
                      value={email}
                      onChange={onChange}
                      name='email'
                      label='Color'
                      helperText='Please tell us what color is the item'
                      fullWidth
                      required
                      aria-describedby="item-helper-text"
                    />
                  </Grid>

                  <Grid item md={12} sm={12} xs={12}>
                    <TextField
                      value={location}
                      onChange={onChange}
                      name='location'
                      label='location'
                      helperText='Please tell us where you found it'
                      fullWidth
                      required
                      aria-describedby="location-helper-text"
                    />
                  </Grid>

                  <Grid item md={12} sm={12} xs={12}>
                    <TextField
                      value={description}
                      onChange={onChange}
                      name='description'
                      label='description'
                      helperText='Please give us more details'
                      fullWidth
                      required
                      aria-describedby="description-helper-text"
                    />
                  </Grid>
                  <h5>Item Type</h5>
                    <input
                      type='radio'
                      name='type'
                      value='lost'
                      checked={type === 'lost'}
                      onChange={onChange}
                    />{' '}
                    Lost{' '}
                    <input
                      type='radio'
                      name='type'
                      value='found'
                      checked={type === 'found'}
                      onChange={onChange}
                    />{' '}
                    Found

                    <div>
                      <input
                        type='submit'
                        value={current ? 'Update Item' : 'Add Item'}
                        className='btn btn-success btn-block'
                      />
                    </div>
                    {current && (
                      <div>
                        <button className='btn btn-light btn-block' onClick={clearAll}>
                          Clear
                        </button>
                      </div>
                    )}
                  </form>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
      </div>
    </React.Fragment>
  );
};

export default ItemForm;
