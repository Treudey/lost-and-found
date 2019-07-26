import {
    GET_PROFILE,
    UPDATE_PROFILE,
    SET_CURRENT,
    CLEAR_PROFILE,
    CLEAR_CURRENT,
    PROFILE_ERROR
  } from '../types';
export default (state,action)=>{
    switch(action.type){
        case GET_PROFILE:
            return{
                ...state,
                isAuthenticated: true,
                user:action.payload,
                loading:0
            }
        case UPDATE_PROFILE:
            return{
               ...state,
               user:action.payload,
               loading: false
            }
        case SET_CURRENT:
            return{
                ...state,
                current:action.payload,
            }
        case CLEAR_CURRENT:
            return {
                ...state,
                current: null
            };
        case CLEAR_PROFILE:
            return{
                ...state,
                user:[]
            }
        case PROFILE_ERROR:
                return {
                    ...state,
                    error: action.payload
                };
        default:
            return state;
    }
}