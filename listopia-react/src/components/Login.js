import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import BounceLogo from './BounceLogo';
import Theme from '../config/theme';

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

  transition: top 0.5s;

  &[data-loggedin='true'] {
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

  &[data-loggedin='false'] {
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

const Login = ({ loggedIn, submitHandler }) => (
  <Container data-loggedin={loggedIn}>
    <BounceLogo size="9rem" />
    <LoginForm onSubmit={submitHandler} data-loggedin={loggedIn}>
      <label htmlFor="name">
        <p>Username</p>
        <input type="text" id="name" placeholder="Name" />
      </label>

      <input type="submit" value="login" />
    </LoginForm>
  </Container>
);

Login.propTypes = {
  loggedIn: PropTypes.string.isRequired,
  submitHandler: PropTypes.func.isRequired,
};

export default Login;
