import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const Item = ({ item }) => (
  <Link to={`item/${item.id}`}>
    <article>
      <p>
        <span>ID: </span>
        {item.id}
      </p>
      <p>
        <span>Price: </span>
        {item.price}
      </p>
      <p>
        <span>Desc: </span>
        {item.desc}
      </p>
      <p>
        <span>Catg: </span>
        {item.category}
      </p>
    </article>
  </Link>
);

Item.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    desc: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};

export default Item;
