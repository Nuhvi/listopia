import React, { useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import BounceLogo from '../components/BounceLogo';
import Theme from '../config/theme';

import Categories from '../components/Categories';
import { authenticate } from '../actions';

const Container = styled.div`
  position: absolute;
  top: 0;

  height: 100%;
  width: 100%;

  background-color: ${Theme.colors.highlight.main};
  color: white;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  transition: top 0.2s;

  &[data-authenticated='true'] {
    top: -100%;
    border-radius: 0 0 20px 20px;
  }
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 0;
  height: 0;
  overflow: hidden;

  transition: 0.3s;

  &[data-authenticated='false'] {
    margin-top: 3rem;
    height: 150px;
  }

  input {
    border-bottom: 2px solid rgba(255, 255, 255, 0.5);
    color: white;

    &::placeholder {
      color: rgba(255, 255, 255, 0.5);
    }
  }
`;

const Login = ({ authenticated, submitHandler }) => (
  <Container data-authenticated={authenticated}>
    <BounceLogo size="9rem" />
    <LoginForm onSubmit={submitHandler} data-authenticated={authenticated}>
      <label htmlFor="name">
        <p>Username</p>
        <input type="text" id="name" placeholder="Name" />
      </label>

      <input type="submit" value="login" />
    </LoginForm>
  </Container>
);

Login.propTypes = {
  authenticated: PropTypes.string.isRequired,
  submitHandler: PropTypes.func.isRequired,
};

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
    </div>
  );
};

IndexPage.propTypes = {
  authenticated: PropTypes.string.isRequired,
  authenticate: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage);
