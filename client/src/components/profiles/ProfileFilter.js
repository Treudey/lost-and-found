import React, { useContext, useRef, useEffect } from 'react';
import ProfileContext from '../../context/profile/profileContext';

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
    <form>
      <input
        ref={text}
        type='text'
        placeholder='Filter Profiles...'
        onChange={onChange}
      />
    </form>
  );
};

export default ProfileFilter;
