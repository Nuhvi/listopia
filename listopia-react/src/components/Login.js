import React from 'react';
import styled from 'styled-components';
import BounceLogo from './BounceLogo';
import Theme from '../config/theme';

const Background = styled.div`
  height: 100vh;
  max-height: 812px;
  background-color: ${Theme.colors.highlight.main};
  color: white;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LoginForm = styled.form`
  display: none;
  flex-direction: column;
`;

export default () => (
  <Background>
    <BounceLogo size="140px" />
    <LoginForm>
      <label htmlFor="name">Username:</label>
      <input id="name" name="name" type="text" />
      <input type="submit" />
    </LoginForm>
  </Background>
);
