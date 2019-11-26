import React from 'react';
import styled from 'styled-components';
import BounceLogo from './BounceLogo';
import Theme from '../config/theme';

const Background = styled.div`
  height: 100%;
  background-color: ${Theme.colors.highlight.main};
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 3rem;

  @keyframes form-start {
    0% {
      margin-top: 0;
      height: 0;
    }
  }

  animation: form-start 0.2s linear 1.5s both;

  height: 100px;
  overflow: hidden;
`;

export default () => (
  <Background>
    <BounceLogo size="9rem" />
    <LoginForm>
      <label htmlFor="name">Username:</label>
      <input id="name" name="name" type="text" />
      <input type="submit" value="login" />
    </LoginForm>
  </Background>
);
