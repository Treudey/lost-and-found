import React, { Fragment, useContext, useEffect } from 'react';
import ProfileContext from '../../context/profile/profileContext';
import ProfileItem from './ProfileItem'
import ProfileForm from './ProfileForm'
import Header from '../Header'

import { Container, Grid } from '@material-ui/core/'

import './style.css'

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
            <Container className='profileContainer'>
            <Grid container>
                <Grid items lg={7} md={12} sm={12} xs={12}>
                    <ProfileForm />
                </Grid>
                <Grid items lg={5} md={12} sm={12} xs={12}>
                    <ProfileItem user={user} />
                </Grid>
            </Grid>
            </Container>
        </Fragment>
    );
};

export default Profile;
