import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Category = ({ category }) => (
  <Link to={`postings/category/${category}`}>
    <div>
      {category}
    </div>
  </Link>
);

Category.propTypes = {
  category: PropTypes.string.isRequired,
};

export default Category;
