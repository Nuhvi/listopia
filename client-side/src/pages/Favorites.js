import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PostingCard from '../components/PostingCard';

function Favorites({ postings }) {
  return (
    <div>
      <h1>Favorites</h1>
      {postings.map((item) => (
        <PostingCard key={item.id} item={item} />
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
  postings: state.postings.data.filter((item) => item.favorite),
});

export default connect(mapStateToProps)(Favorites);
