import React, { useState, useContext, useEffect } from 'react';
import ProfileContext from '../../context/profile/profileContext';

const ProfileForm = () => {
  const profileContext = useContext(ProfileContext);

  const { addProfile, updateProfile, clearCurrent, current } = profileContext;

  useEffect(() => {
    if (current !== null) {
      setProfile(current);
    } else {
      setProfile({
        name: '',
        email: '',
        phone: '',
        type: 'lost',
        location:'',
        description:''
      });
    }
  }, [profileContext, current]);

  const [profile, setProfile] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'lost',
    location:'',
    description:''
  });

  const { name, email, phone, type,location,description } = profile;

  const onChange = e =>
    setProfile({ ...profile, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (current === null) {
      addProfile(profile);
    } else {
      updateProfile(profile);
    }
    clearAll();
  };

  const clearAll = () => {
    clearCurrent();
  };

  return (
    <form onSubmit={onSubmit}>
      <h2 className='text-primary'>
        {current ? 'Edit Item' : 'Add Item'}
      </h2>
      <input
        type='text'
        placeholder='Name'
        name='name'
        value={name}
        onChange={onChange}
      />
      <input
        type='email'
        placeholder='Email'
        name='email'
        value={email}
        onChange={onChange}
      />
      <input
        type='text'
        placeholder='Phone'
        name='phone'
        value={phone}
        onChange={onChange}
      />

      <input
        type='text'
        placeholder='Location'
        name='location'
        value={location}
        onChange={onChange}
      />

      <input
        type='text'
        placeholder='description'
        name='description'
        value={description}
        onChange={onChange}
      />
      <h5>Item Type</h5>
      <input
        type='radio'
        name='type'
        value='lost'
        checked={type === 'lost'}
        onChange={onChange}
      />{' '}
      Lost{' '}
      <input
        type='radio'
        name='type'
        value='found'
        checked={type === 'found'}
        onChange={onChange}
      />{' '}
      Found
      <div>
        <input
          type='submit'
          value={current ? 'Update Profile' : 'Add Profile'}
          className='btn btn-primary btn-block'
        />
      </div>
      {current && (
        <div>
          <button className='btn btn-light btn-block' onClick={clearAll}>
            Clear
          </button>
        </div>
      )}
    </form>
  );
};

export default ProfileForm;
