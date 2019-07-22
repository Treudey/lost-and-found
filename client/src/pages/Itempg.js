import React, { useContext, useEffect } from 'react';
import Items from '../components/items/Items';
import ItemForm from '../components/items/ItemForm';
import ItemFilter from '../components/items/ItemFilter';
import AuthContext from '../context/auth/authContext';
import './Profile.css'


const Itempg = () => {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);

  return (
    <div className='grid-2'>
      <div>
        <ItemForm />
      </div>
      <div>
        <ItemFilter />
        <Items />
      </div>
    </div>
  );
};

export default Itempg;
