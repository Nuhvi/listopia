import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PostingCard from '../components/PostingCard';
import { fetchFavorites } from '../actions';

const Favorites = ({ favorites, fetchFavorites }) => {
  useEffect(() => {
    fetchFavorites();
  }, [fetchFavorites]);

  return (
    <div>
      <h1>Favorites</h1>
      {favorites.map((posting) => (
        posting.favorited ? <PostingCard key={posting.id} posting={posting} /> : ''
      ))}
    </div>
  );
};

Favorites.propTypes = {
  fetchFavorites: PropTypes.func.isRequired,
  favorites: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired,
      category: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

const mapStateToProps = (state) => ({
  favorites: state.favorites.data,
});

const mapDispatchToProps = (dispatch) => ({
  fetchFavorites: () => fetchFavorites(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
