import React, { useContext, useRef, useEffect } from 'react';
import ProfileContext from '../../context/profile/profileContext';

// Material UI Imports


const ProfileFilter = () => {
  const profileContext = useContext(ProfileContext);
  const text = useRef('');

  const { filterProfiles, clearFilter, filtered } = profileContext;


  useEffect(() => {
    if (filtered === null) {
      text.current.value = '';
    }
  });

  const onChange = e => {
    if (text.current.value !== '') {
      filterProfiles(e.target.value);
    } else {
      clearFilter();
    }
  };

  return (
    <form className="form">
    <input
      ref={text}
      type='text'
      placeholder='Lookup your posting here'
      onChange={onChange}
    />
    </form>
  );
};

export default ProfileFilter;
