import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toggleFavorite } from '../actions';

const PostingCard = ({ postingId, toggleFavorite }) => (
  <button type="button" onClick={() => toggleFavorite(postingId)}>
    Favorite
  </button>
);

PostingCard.propTypes = {
  toggleFavorite: PropTypes.func.isRequired,
  postingId: PropTypes.number.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  toggleFavorite: (id) => toggleFavorite(dispatch, id),
});

export default connect(null, mapDispatchToProps)(PostingCard);
