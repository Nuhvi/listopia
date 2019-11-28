import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { toggleFavorite } from '../actions';

const Item = ({ items, toggleFavorite }) => {
  const { id } = useParams();
  const item = items.find((item) => item.id === Number(id));

  return (
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
      <button type="button" onClick={() => toggleFavorite(item.id)}>
        Favorite
      </button>
    </article>
  );
};

Item.propTypes = {
  toggleFavorite: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired,
      desc: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      favorite: PropTypes.bool.isRequired,
    }),
  ).isRequired,
};

const mapStateToProps = (state) => ({
  items: state.items,
});

const mapDispatchToProps = (dispatch) => ({
  toggleFavorite: (id) => dispatch(toggleFavorite(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Item);
