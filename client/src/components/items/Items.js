import React, { Fragment, useContext, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import PostedItem from './PostedItem';
import Spinner from '../layout/Spinner';
import ItemContext from '../../context/item/itemContext';

import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Card, CardContent, Grid } from '@material-ui/core/'
import { withStyles} from '@material-ui/core/styles'



const Items = () => {
  const itemContext = useContext(ItemContext);

  const { items, filtered, getItems, loading } = itemContext;

  useEffect(() => {
    getItems();
    // eslint-disable-next-line
  }, []);

  if (items !== null && items.length === 0 && !loading) {
    return <h4>Please add an Item you found or lost</h4>;
  }

  return (
    <Fragment>
      <Container>
        <CssBaseline />
          <Grid>
              {items !== null && !loading ? (
          filtered !== null
            ? filtered.map(item => (
                <div
                  key={item._id}
                  classNames='item'
                >
                  <PostedItem item={item} />
                </div>
              ))
            : items.map(item => (
              
                  <PostedItem item={item} />
              ))
      ) : (
        <Spinner />
      )}
          </Grid>
      </Container>
    
    </Fragment>
  );
};

export default Items;
