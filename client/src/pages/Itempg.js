import React, { useContext, useEffect } from 'react';
import Items from '../components/items/Items';
import ItemForm from '../components/items/ItemForm';
import ItemFilter from '../components/items/ItemFilter';
import AuthContext from '../context/auth/authContext';
import Header from '../components/Header'

import { Grid } from '@material-ui/core/'


const Itempg = () => {
    const authContext = useContext(AuthContext);

    useEffect(() => {
        authContext.loadUser();
        // eslint-disable-next-line
    }, []);

    return (
        <React.Fragment>
        <Header type='items'/>
        <Grid container className='bottom'>
            <Grid item lg={7} md={12} sm={12} xs={12}>
                <ItemForm />
            </Grid>
            <Grid item lg={5} md={12} sm={12} xs={12}>
                <ItemFilter />
                <Items />
            </Grid>
        </Grid>
        </React.Fragment>
    );
};

export default Itempg;
