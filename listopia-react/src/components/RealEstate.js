import React from 'react';
import PropTypes from 'prop-types';

const RealEstate = ({ realEstate }) => (
  <article>
    <p>
      <span>ID: </span>
      {realEstate.id}
    </p>
    <p>
      <span>Price: </span>
      {realEstate.price}
    </p>
    <p>
      <span>Desc: </span>
      {realEstate.desc}
    </p>
    <p>
      <span>Catg: </span>
      {realEstate.category}
    </p>
  </article>
);

RealEstate.propTypes = {
  realEstate: PropTypes.shape({
    id: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    desc: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};

export default RealEstate;
