import {
  GET_PROFILES,
  ADD_PROFILE,
  DELETE_PROFILE,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_PROFILE,
  FILTER_PROFILES,
  CLEAR_FILTER,
  PROFILE_ERROR,
  CLEAR_PROFILES
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_PROFILES:
      return {
        ...state,
        profiles: action.payload,
        loading: false
      };
    case ADD_PROFILE:
      return {
        ...state,
        profiles: [action.payload, ...state.profiles],
        loading: false
      };
    case UPDATE_PROFILE:
      return {
        ...state,
        profiles: state.profiles.map(profile =>
          profile._id === action.payload._id ? action.payload : profile
        ),
        loading: false
      };
    case DELETE_PROFILE:
      return {
        ...state,
        profiles: state.profiles.filter(
          profile => profile._id !== action.payload
        ),
        loading: false
      };
    case CLEAR_PROFILES:
      return {
        ...state,
        profiles: null,
        filtered: null,
        error: null,
        current: null
      };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null
      };
    case FILTER_PROFILES:
      return {
        ...state,
        filtered: state.profiles.filter(profile => {
          const regex = new RegExp(`${action.payload}`, 'gi');
          return profile.name.match(regex) || profile.email.match(regex);
        })
      };
    case CLEAR_FILTER:
      return {
        ...state,
        filtered: null
      };
    case PROFILE_ERROR:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
