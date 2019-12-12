import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PostingCard from '../components/PostingCard';
import { fetchFavorites } from '../actions';
import Layout from './Layout';
import CustomGrid from '../components/CustomGrid';

const Favorites = ({ favorites, fetchFavorites }) => {
  useEffect(() => {
    fetchFavorites();
  }, [fetchFavorites]);

  return (
    <Layout title="Favorites">
      <CustomGrid>
        {favorites.map((posting) => (
          <li key={posting.id}>
            <PostingCard posting={posting} />
          </li>
        ))}
      </CustomGrid>
    </Layout>
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
