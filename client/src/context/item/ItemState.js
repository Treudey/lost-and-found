import React, { useReducer } from 'react';
import axios from 'axios';
import ItemContext from './itemContext';
import itemReducer from './itemReducer';
import {
  GET_ITEMS,
  ADD_ITEM,
  DELETE_ITEM,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_ITEM,
  FILTER_ITEMS,
  CLEAR_ITEMS,
  CLEAR_FILTER,
  ITEM_ERROR
} from '../types';

const ItemState = props => {
  const initialState = {
    items: null,
    current: null,
    filtered: null,
    error: null
  };

  const [state, dispatch] = useReducer(itemReducer, initialState);

  // Get 
  const getItems = async () => {
    try {
      const res = await axios.get('/api/items');

      dispatch({
        type: GET_ITEMS,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: ITEM_ERROR,
        payload: err.response.msg
      });
    }
  };

  // Add 
  const addItem = async item => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    try {
      const res = await axios.post('/api/items', item, config);

      dispatch({
        type: ADD_ITEM,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: ITEM_ERROR,
        payload: err.response.msg
      });
    }
  };

  // Delete 
  const deleteItem = async id => {
    try {
      await axios.delete(`/api/items/${id}`);

      dispatch({
        type: DELETE_ITEM,
        payload: id
      });
    } catch (err) {
      dispatch({
        type: ITEM_ERROR,
        payload: err.response.msg
      });
    }
  };

  // Update 
  const updateItem = async item => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    try {
      const res = await axios.put(
        `/api/items/${item._id}`,
        item,
        config
      );

      dispatch({
        type: UPDATE_ITEM,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: ITEM_ERROR,
        payload: err.response.msg
      });
    }
  };

  // Clear 
  const clearItems = () => {
    dispatch({ type: CLEAR_ITEMS });
  };

  // Set Current ITEMS
  const setCurrent = item => {
    dispatch({ type: SET_CURRENT, payload: item });
  };

  // Clear Current item
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };

  // Filter items
  const filterItems = text => {
    dispatch({ type: FILTER_ITEMS, payload: text });
  };

  // Clear Filter
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };

  return (
    <ItemContext.Provider
      value={{
        items: state.items,
        current: state.current,
        filtered: state.filtered,
        error: state.error,
        addItem,
        deleteItem,
        setCurrent,
        clearCurrent,
        updateItem,
        filterItems,
        clearFilter,
        getItems,
        clearItems
      }}
    >
      {props.children}
    </ItemContext.Provider>
  );
};

export default ItemState;
