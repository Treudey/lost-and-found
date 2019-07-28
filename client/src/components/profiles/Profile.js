import React, { Fragment, useContext, useEffect } from 'react';
import ProfileContext from '../../context/profile/profileContext';
import ProfileItem from './ProfileItem'
import ProfileForm from './ProfileForm'
import Header from '../Header'

import { Grid } from '@material-ui/core/'


const Profile = () => {
    const profileContext = useContext(ProfileContext);

    const { user, getProfile } = profileContext
    useEffect(() => {
        getProfile();
        //eslint-disable-next-line
    }, [])

    return (
        <Fragment>
            <Header type='profile' />
            <Grid container>
                <Grid items md={7} sm={12} xs={12}>
                    <ProfileForm />
                </Grid>
                <Grid items md={5} sm={12} xs={12}>
                    <ProfileItem user={user} />
                </Grid>
            </Grid>
        </Fragment>
    );
};

export default Profile;
