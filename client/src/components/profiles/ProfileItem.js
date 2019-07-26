import React, {useContext} from 'react'
import PropTypes from'prop-types'
import ProfileContext from '../../context/profile/profileContext'

const ProfileItem = ({user}) => {
  const profileContext = useContext(ProfileContext)
  const {setCurrent} = profileContext

  const {id,name,email}=user

  return (
    <div className='card bg-light'>
      <h2 className='text-left'>User Info</h2>
      <h3 className='text-left'>Your Username: {name}</h3>
      <h3 className='text-left'>Your email: {email}</h3>

      <button className='btn btn-primary' onClick={()=>setCurrent(user)}>Update</button>
    </div>
  )
}

ProfileItem.propTypes = {
  user:PropTypes.object.isRequired,
}

export default ProfileItem
