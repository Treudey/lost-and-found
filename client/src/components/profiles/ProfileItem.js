import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ProfileContext from '../../context/profile/profileContext';

const ProfileItem = ({ profile }) => {
  const profileContext = useContext(ProfileContext);
  const { deleteProfile, setCurrent, clearCurrent } = profileContext;

  const { _id, name, email, phone,type,location,description } = profile;

  const onDelete = () => {
    deleteProfile(_id);
    clearCurrent();
  };

  return (
    <div className='card bg-light'>
      <h3 className='text-primary text-left'>
        {name}{' '}
        <span
          style={{ float: 'right' }}
          className={
            'badge ' +
            (type === 'found' ? 'badge-success' : 'badge-primary')
          }
        >
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </span>
      </h3>
      <ul className='list'>
        {email && (
          <li>
             {email}
          </li>
        )}
        {phone && (
          <li>
             {phone}
          </li>
        )}

        {location && (
          <li>
             {location}
          </li>
        )}

        {description && (
          <li>
             {description}
          </li>
        )}


      </ul>
      <p>
        <button
          className='btn btn-dark btn-sm'
          onClick={() => setCurrent(profile)}
        >
          Edit
        </button>
        <button className='btn btn-danger btn-sm' onClick={onDelete}>
          Delete
        </button>
      </p>
    </div>
  );
};

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileItem;
