import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Card } from '@material-ui/core';

const Icon = styled.img`
  width: 100%;
  height: 100%;

  background-color: ${(props) => props.bacground};
  mask: url(${(props) => props.icon}) no-repeat center;
  mask-size: contain;
`;

const Category = ({ category, icon }) => (
  <Card>
    <Link to={`postings/category/${category}`}>
      <Icon icon={icon} bacground="red" />
      <p>{category}</p>
    </Link>
  </Card>
);

Category.propTypes = {
  category: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Category;
