import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import styled from 'styled-components';
import { toggleFavorite } from '../actions';

const AnimatedFavoriteIcon = styled(FavoriteIcon)`
  @keyframes favorite {
    50% { transform: scale(1.5) }
  }
  animation: favorite 0.2s;
`;


const FavoriteButton = ({
  posting, toggleFavorite, className, size,
}) => (
  <button
    type="button"
    className={className}
    style={{ cursor: 'pointer' }}
    onClick={() => toggleFavorite(posting.id, posting.favorited)}
  >
    {posting.favorited ? (
      <AnimatedFavoriteIcon style={{ fontSize: size }} />
    ) : (
      <FavoriteBorderIcon style={{ fontSize: size }} />
    )}
  </button>
);

FavoriteButton.propTypes = {
  size: PropTypes.string,
  className: PropTypes.string,
  toggleFavorite: PropTypes.func.isRequired,
  posting: PropTypes.shape({
    id: PropTypes.number.isRequired,
    favorited: PropTypes.bool.isRequired,
  }).isRequired,
};

FavoriteButton.defaultProps = {
  size: '1.5rem',
  className: '',
};

const mapDispatchToProps = (dispatch) => ({
  toggleFavorite: (id, favorited) => toggleFavorite(dispatch, id, favorited),
});

export default connect(null, mapDispatchToProps)(FavoriteButton);
