import React from 'react';
import styled from 'styled-components';
import logo from '../images/logo.svg';

const Logo = styled.div`
  position: relative;
  background-color: white;
  width: 140px;
  height: 140px;
  border-radius: 100%;

  @keyframes example {
    0% {
      opacity: 0;
    }
    1%{
      width: 100px;
      height: 20px;
      border-radius: 10px;
      opacity: 0.1
    }
    33%{
      width: 180px;
      height: 100px;
      border-radius: 50px;
      opacity: 0.5
    }
    66%{
      width: 140px;
      height: 130px;
      border-radius: 50%;
      opacity: 0.9
    }
    100% {
      width: 140px;
      height: 140px;
      border-radius: 50%;
      opacity: 1
    }
  }
  animation: example .3s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.3s both;
`;

const Img = styled.img`
  position: absolute;

  left: 25%;
  top: 25%;
  height: 50%;
  width: 50%;
`;

export default () => (
  <Logo>
    <Img src={logo} />
  </Logo>
);
