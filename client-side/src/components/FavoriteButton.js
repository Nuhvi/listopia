import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { Button } from '@material-ui/core';
import { toggleFavorite } from '../actions';

const PostingCard = ({ postingId, toggleFavorite }) => (
  <Button type="button" onClick={() => toggleFavorite(postingId)}>
    <FavoriteIcon />
    <FavoriteBorderIcon />
  </Button>
);

PostingCard.propTypes = {
  toggleFavorite: PropTypes.func.isRequired,
  postingId: PropTypes.number.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  toggleFavorite: (id) => toggleFavorite(dispatch, id),
});

export default connect(null, mapDispatchToProps)(PostingCard);
