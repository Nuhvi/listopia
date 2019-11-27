import React, { useState, useEffect } from 'react';
import Login from '../components/Login';
import Categories from '../components/Categories';

export default () => {
  const [state, setState] = useState({ LoggedIn: 'pending' });

  const submitHandler = (e) => {
    e.preventDefault();
    setState({ LoggedIn: 'true' });
    document.activeElement.blur();
  };

  const checkAuthentication = () => localStorage.getItem('userId');

  useEffect(() => {
    if (state.LoggedIn === 'pending') {
      new Promise((resolve) => {
        setTimeout(() => {
          resolve('resolved');
        }, 1500);
      }).then(() => setState({ LoggedIn: `${!!checkAuthentication()}` }));
    }
  });

  return (
    <div>
      <Login loggedIn={state.LoggedIn} submitHandler={submitHandler} />
      <Categories />
    </div>
  );
};
