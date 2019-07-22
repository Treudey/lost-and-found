import React, { useContext, useRef, useEffect } from 'react';
import ItemContext from '../../context/item/itemContext';

// Material UI Imports


const ItemFilter = () => {
  const itemContext = useContext(ItemContext);
  const text = useRef('');

  const { filterItems, clearFilter, filtered } = itemContext;


  useEffect(() => {
    if (filtered === null) {
      text.current.value = '';
    }
  });

  const onChange = e => {
    if (text.current.value !== '') {
      filterItems(e.target.value);
    } else {
      clearFilter();
    }
  };

  return (
    <form className="form">
    <input
      ref={text}
      type='text'
      placeholder='Lookup your posting here'
      onChange={onChange}
    />
    </form>
  );
};

export default ItemFilter;
