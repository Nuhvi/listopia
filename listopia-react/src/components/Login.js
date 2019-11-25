import React from 'react';
import styled from 'styled-components';

const Background = styled.div`
  height: 100vh;
  background-color: #c513af;
  color: white;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export default () => (
  <Background>
    <LoginForm>
      <label htmlFor="name">Username:</label>
      <input id="name" name="name" type="text" />
      <input type="submit" />
    </LoginForm>
  </Background>
);
