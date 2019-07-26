import React, { useContext, useEffect } from 'react';
import Profile from '../components/profiles/Profile'
import AuthContext from '../context/auth/authContext';

import './Profile.css'


const Profilepg = () => {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);

  return (
    <div className='grid-2'>
      <div>
        <Profile/>
      </div>
    </div>
  );
};

export default Profilepg;
