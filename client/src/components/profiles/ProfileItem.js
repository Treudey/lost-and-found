import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import ProfileContext from '../../context/profile/profileContext'

//Material UI Imports
import { Button, Card,  CardContent, Typography } from '@material-ui/core/'

//Style Files
import './style.css';
import '../../App.css'

const ProfileItem = ({ user }) => {
  const profileContext = useContext(ProfileContext)
  const { setCurrent } = profileContext

  // const { id, name, email } = user
  const { name, email } = user

  return (
      <Card className='card'>
        <CardContent>
          <Typography variant='h4' className='h4' align='center'>User Info</Typography><br></br>
          <Typography variant='h6'>Your username: <span className='user size'>{name}</span></Typography><br></br>
          <Typography variant='h6'>Your email: <span className='user size'>{email}</span></Typography><br></br>
          <Button style={{ backgroundColor: '#152b51', color: 'white' }} className='hover' variant="contained" onClick={() => setCurrent(user)}>Update</Button>
        </CardContent>
      </Card>
  )
}

ProfileItem.propTypes = {
  user: PropTypes.object.isRequired,
}

export default ProfileItem