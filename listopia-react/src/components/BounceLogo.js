import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import logo from '../images/logo.svg';
import Theme from '../config/theme';

const WhiteCircle = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: white;

  @keyframes white-grow {
    0% {
      opacity: 0;
    }
    1% {
      width: 70%;
      height: 15%;
      border-radius: 10px;
      opacity: 0.1;
    }
    33% {
      width: 120%;
      height: 60%;
      border-radius: 50px;
      opacity: 0.1;
    }
    66% {
      width: 100%;
      height: 90%;
      border-radius: 50%;
      opacity: 0.9;
    }
    90% {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      opacity: 1;
    }
  }
  animation: white-grow 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.5s both;
`;

const Icon = styled.img`
  position: absolute;

  width: 50%;
  height: 50%;

  background-color: ${Theme.colors.highlight.main};
  mask: url(${logo}) no-repeat center;
  mask-size: contain;

  @keyframes logo-grow {
    0% {
      opacity: 0;
      width: 0;
      height: 0%;
    }
    50% {
      width: 60%;
      height: 60%;
    }
    100% {
      opacity: 1;
    }
  }
  animation: logo-grow 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94) 1s both;
`;

const Container = styled.div`
  position: relative;
  width: ${(props) => props.size};
  height: ${(props) => props.size};

  display: flex;
  justify-content: center;
  align-items: center;
`;

const BounceLogo = ({ size }) => (
  <Container size={size}>
    <WhiteCircle />
    <Icon />
  </Container>
);

BounceLogo.propTypes = {
  size: PropTypes.string.isRequired,
};

export default BounceLogo;
