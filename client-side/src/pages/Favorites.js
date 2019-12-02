import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PostingCard from '../components/PostingCard';
import { fetchPostings } from '../actions';
import { filterFavoritedPostings } from '../selectors';

const Favorites = ({ postings, fetchPostings }) => {
  useEffect(() => {
    fetchPostings();
  }, [fetchPostings]);

  return (
    <div>
      <h1>Favorites</h1>
      {postings.map((posting) => (
        <PostingCard key={posting.id} posting={posting} />
      ))}
    </div>
  );
};

Favorites.propTypes = {
  fetchPostings: PropTypes.func.isRequired,
  postings: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired,
      category: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

const mapStateToProps = (state) => ({
  postings: filterFavoritedPostings(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchPostings: () => fetchPostings(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
