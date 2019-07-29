import React, { Fragment, useContext, useEffect } from 'react';
import PostedItem from './PostedItem';
import Spinner from '../layout/Spinner';
import ItemContext from '../../context/item/itemContext';

//Material UI imports
import { Container, CssBaseline, Grid } from '@material-ui/core/'

//Style Imports
import './style.css'



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
            <Container className='infoContainer'>
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
