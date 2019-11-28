import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Item from '../components/Item';

function Favorites({ items }) {
  return (
    <div>
      <h1>Favorites</h1>
      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
}

Favorites.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired,
      desc: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

const mapStateToProps = (state) => ({
  items: state.items.filter((item) => item.favorite),
});

export default connect(mapStateToProps)(Favorites);
