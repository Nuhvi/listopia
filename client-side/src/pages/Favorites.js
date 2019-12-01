import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect, useDispatch } from 'react-redux';
import PostingCard from '../components/PostingCard';
import fetchPostings from '../fetching/postings';
import { filterFavoritedPostings } from '../selectors';

function Favorites({ postings }) {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchPostings(dispatch);
  }, [dispatch]);

  return (
    <div>
      <h1>Favorites</h1>
      {postings.map((posting) => (
        <PostingCard key={posting.id} posting={posting} />
      ))}
    </div>
  );
}

Favorites.propTypes = {
  postings: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired,
      desc: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

const mapStateToProps = (state) => ({
  postings: filterFavoritedPostings(state),
});

export default connect(mapStateToProps)(Favorites);
