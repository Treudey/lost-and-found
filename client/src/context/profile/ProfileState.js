import React, { useReducer } from 'react';
import axios from 'axios';
import ProfileContext from './profileContext';
import profileReducer from './profileReducer';
import {
  GET_PROFILES,
  ADD_PROFILE,
  DELETE_PROFILE,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_PROFILE,
  FILTER_PROFILES,
  CLEAR_PROFILES,
  CLEAR_FILTER,
  PROFILE_ERROR
} from '../types';

const ProfileState = props => {
  const initialState = {
    profiles: null,
    current: null,
    filtered: null,
    error: null
  };

  const [state, dispatch] = useReducer(profileReducer, initialState);

  // Get 
  const getProfiles = async () => {
    try {
      const res = await axios.get('/api/profiles');

      dispatch({
        type: GET_PROFILES,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: PROFILE_ERROR,
        payload: err.response.msg
      });
    }
  };

  // Add 
  const addProfile = async profile => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    try {
      const res = await axios.post('/api/profiles', profile, config);

      dispatch({
        type: ADD_PROFILE,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: PROFILE_ERROR,
        payload: err.response.msg
      });
    }
  };

  // Delete 
  const deleteProfile = async id => {
    try {
      await axios.delete(`/api/profiles/${id}`);

      dispatch({
        type: DELETE_PROFILE,
        payload: id
      });
    } catch (err) {
      dispatch({
        type: PROFILE_ERROR,
        payload: err.response.msg
      });
    }
  };

  // Update 
  const updateProfile = async profile => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    try {
      const res = await axios.put(
        `/api/profiles/${profile._id}`,
        profile,
        config
      );

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
  };

  // Clear 
  const clearProfiles = () => {
    dispatch({ type: CLEAR_PROFILES });
  };

  // Set Current PROFILES
  const setCurrent = profile => {
    dispatch({ type: SET_CURRENT, payload: profile });
  };

  // Clear Current profile
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };

  // Filter profiles
  const filterProfiles = text => {
    dispatch({ type: FILTER_PROFILES, payload: text });
  };

  // Clear Filter
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };

  return (
    <ProfileContext.Provider
      value={{
        profiles: state.profiles,
        current: state.current,
        filtered: state.filtered,
        error: state.error,
        addProfile,
        deleteProfile,
        setCurrent,
        clearCurrent,
        updateProfile,
        filterProfiles,
        clearFilter,
        getProfiles,
        clearProfiles
      }}
    >
      {props.children}
    </ProfileContext.Provider>
  );
};

export default ProfileState;
