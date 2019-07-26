import React, { useReducer } from 'react';
import axios from 'axios';
import ProfileContext from './profileContext';
import profileReducer from './profileReducer';
import {
  SET_CURRENT,
  CLEAR_CURRENT,
  CLEAR_PROFILE,
  GET_PROFILE,
  UPDATE_PROFILE,
  PROFILE_ERROR
} from '../types';

const ProfileState = props =>{
  const initialState={
      user:[],
      current:null,
      show:false,
      error:null
  }
  const [state, dispatch] = useReducer(profileReducer, initialState);

  //set current contact
  const setCurrent = user =>{
    dispatch({
      type:SET_CURRENT,
      payload:user
    })
  }

  //clear current field
  const clearCurrent = () =>{
    dispatch({
      type:CLEAR_CURRENT
    })
  }

  //clear profile
  const clearProfile = ()=>{
    dispatch({
      type:CLEAR_PROFILE
    })
  }

  //Get user
  const getProfile = async () =>{
    try{
        const res = await axios.get('/api/users');
        dispatch({
            type:GET_PROFILE,
            payload:res.data
        })
    }catch (err) {
        dispatch({
            type: PROFILE_ERROR,
            payload: err.response.msg
        });
    }
  }

  // Update 
  const updateProfile = async user => {
      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      };
      try {
      const res = await axios.put('/api/users',user,config);
      dispatch({
          type: UPDATE_PROFILE,
          payload: res.data
      });
      } catch (err) {
      dispatch({
          type: PROFILE_ERROR,
          payload: err.response.msg
      });
      }
  }


  return (
    <ProfileContext.Provider
      value={{
        user: state.user,
        current: state.current,
        error: state.error,
        setCurrent,
        clearCurrent,
        clearProfile,
        getProfile,
        updateProfile
      }}
    >
      {props.children}
    </ProfileContext.Provider>
  );


}
export default ProfileState;
