import React from 'react';
import styled from 'styled-components';
import Home from '../pages';

const Container = styled.div`
  position: relative;
  height: 100vh;

  @media only screen and (min-width: 1025px) {
    margin: auto;
    margin-top: 20px;
    max-width: 375px;
    max-height: 812px;
    border-radius: 40px;
    overflow: hidden;
    border: 8px solid white;
    box-shadow: 0px 0px 12px 5px rgba(0, 0, 0, 0.2);
  }
`;

export default () => (
  <Container>
    <Home />
  </Container>
);
