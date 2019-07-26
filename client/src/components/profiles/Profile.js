import React, { Fragment, useContext, useEffect } from 'react';
import ProfileContext from '../../context/profile/profileContext';
import ProfileItem from './ProfileItem'
import ProfileForm from './ProfileForm'
const Profile = () => {
  const profileContext = useContext(ProfileContext);

  const {user,getProfile} = profileContext
  useEffect(()=>{
      getProfile();
    //eslint-disable-next-line
  },[])



  return (
    <Fragment>
        <ProfileItem user={user} />
        <ProfileForm></ProfileForm>
    </Fragment>
  );
};

export default Profile;
