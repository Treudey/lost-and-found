import React, { useContext, useEffect } from 'react';
import Profile from '../components/profiles/Profile'
import AuthContext from '../context/auth/authContext';

const Profilepg = () => {
    const authContext = useContext(AuthContext);

    useEffect(() => {
        authContext.loadUser();
        // eslint-disable-next-line
    }, []);

    return (
        <Profile />
    );
};

export default Profilepg;
