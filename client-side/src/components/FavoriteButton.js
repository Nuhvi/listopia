import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { useTheme } from '@material-ui/core';
import styled from 'styled-components';
import { toggleFavorite } from '../actions';

const AnimatedFavoriteIcon = styled(FavoriteIcon)`
      width: 1rem;
      height: 1rem;

  @keyframes favorite {
    50% {
      width: 2rem;
      height: 2rem;
    }
  }
  animation: favorite 0.2s;
`;

const PostingCard = ({ posting, toggleFavorite }) => {
  const theme = useTheme();
  return (
    <button
      type="button"
      onClick={() => toggleFavorite(posting.id)}
      style={{
        color: theme.palette.primary.main,
      }}
    >
      {posting.favorited
        ? <AnimatedFavoriteIcon />
        : <FavoriteBorderIcon />}
    </button>
  );
};

PostingCard.propTypes = {
  toggleFavorite: PropTypes.func.isRequired,
  posting: PropTypes.shape({
    id: PropTypes.number.isRequired,
    favorited: PropTypes.bool.isRequired,
  }).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  toggleFavorite: (id) => toggleFavorite(dispatch, id),
});

export default connect(null, mapDispatchToProps)(PostingCard);
