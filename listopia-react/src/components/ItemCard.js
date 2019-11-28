import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { toggleFavorite } from '../actions';

const ItemCard = ({ item, toggleFavorite }) => (
  <div>
    <Link to={(location) => (
      { ...location, pathname: `/items/${item.id}` }
    )}
    >
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
        <p>
          <span>Favorite: </span>
          {`${item.favorite}`}
        </p>

      </article>
    </Link>
    <button type="button" onClick={() => toggleFavorite(item.id)}>
        Favorite
    </button>
  </div>
);

ItemCard.propTypes = {
  toggleFavorite: PropTypes.func.isRequired,
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    desc: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    favorite: PropTypes.bool.isRequired,
  }).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  toggleFavorite: (id) => dispatch(toggleFavorite(id)),
});

export default connect(null, mapDispatchToProps)(ItemCard);
