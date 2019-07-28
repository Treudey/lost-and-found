import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import ProfileContext from '../../context/profile/profileContext'

//Material UI Imports
import {  Button, Card,  CardContent, Container, Typography } from '@material-ui/core/'

//Style Files
import '../../App.css'

const ProfileItem = ({ user }) => {
  const profileContext = useContext(ProfileContext)
  const { setCurrent } = profileContext

  const { id, name, email } = user

  return (
    <Container className="profileContainer">
      <Card className='height'>
        <CardContent className='p-3'>
          <Typography variant='h4' className='h4' align='center'>User Info</Typography><br></br>
          <Typography variant='h5'>Your username: <span className='user'>{name}</span></Typography><br></br>
          <Typography variant='h5'>Your email: <span className='user'>{email}</span></Typography><br></br>
          <Button style={{ backgroundColor: '#152b51', color: 'white' }} className='hover' variant="contained" onClick={() => setCurrent(user)}>Update</Button>
        </CardContent>
      </Card>
    </Container>
  )
}

ProfileItem.propTypes = {
  user: PropTypes.object.isRequired,
}

export default ProfileItem
