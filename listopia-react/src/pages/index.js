import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Login from '../components/Login';
import Categories from '../components/Categories';
import { authenticate } from '../actions';

const mapStateToProps = (state) => ({
  authenticated: state.authenticated,
});

const mapDispatchToProps = (dispatch) => ({
  authenticate: (userId) => dispatch(authenticate(userId)),
});

const IndexPage = ({ authenticated, authenticate }) => {
  const submitHandler = (e) => {
    e.preventDefault();
    authenticate(e.target.name.value);
    localStorage.setItem('userId', e.target.name.value);
    document.activeElement.blur();
  };

  const checkSession = () => {
    const userId = localStorage.getItem('userId');
    authenticate(userId);
  };

  useEffect(() => {
    if (authenticated === 'pending') {
      new Promise((resolve) => {
        setTimeout(() => {
          resolve('resolved');
        }, 1500);
      }).then(() => checkSession());
    }
  });

  return (
    <div>
      <Login authenticated={authenticated} submitHandler={submitHandler} />
      {authenticated === 'true' ? <Categories /> : ''}
    </div>
  );
};

IndexPage.propTypes = {
  authenticated: PropTypes.string.isRequired,
  authenticate: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage);
