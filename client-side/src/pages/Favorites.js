import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PostingCard from '../components/PostingCard';

function Favorites({ items }) {
  return (
    <div>
      <h1>Favorites</h1>
      {items.map((item) => (
        <PostingCard key={item.id} item={item} />
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
