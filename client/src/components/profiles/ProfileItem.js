import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ProfileContext from '../../context/profile/profileContext';

// Material UI Imports
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Card, CardContent, Grid } from '@material-ui/core/'
import { withStyles} from '@material-ui/core/styles'


const ProfileItem = ({ profile }) => {
  const profileContext = useContext(ProfileContext);
  const { deleteProfile, setCurrent, clearCurrent } = profileContext;

  const { _id, name, email,type,location,description } = profile;

  const onDelete = () => {
    deleteProfile(_id);
    clearCurrent();
  };

  return (
   
      <div className='card formcard bg-light'>
      <h3 className='text-success text-left'>
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
        <span className='text-danger'> Color:</span>{email && (
          <li>
             {email}
          </li>
        )}

      <span className='text-danger'> Location:</span>{location && (
          <li>
            {location}
          </li>
        )}

      <span className='text-danger'> Description:</span>{description && (
          <li>
             {description}
          </li>
        )}


      </ul>
      <p>
        <button
          className='btn btn-success btn-sm'
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
