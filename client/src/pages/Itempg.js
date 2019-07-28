import React, { useContext, useEffect } from 'react';
import Items from '../components/items/Items';
import ItemForm from '../components/items/ItemForm';
import ItemFilter from '../components/items/ItemFilter';
import AuthContext from '../context/auth/authContext';

import { Grid } from '@material-ui/core/'


const Itempg = () => {
    const authContext = useContext(AuthContext);

    useEffect(() => {
        authContext.loadUser();
        // eslint-disable-next-line
    }, []);

    return (

        <Grid container className='bottom'>
            <Grid item md={7} sm={12} xs={12}>
                <ItemForm />
            </Grid>
            <Grid item md={5} sm={12} xs={12}>
                <ItemFilter />
                <Items />
            </Grid>
        </Grid>
    );
};

export default Itempg;
