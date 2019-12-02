import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { toggleFavorite } from '../actions';

const PostingCard = ({ posting }) => (
  <div>
    <Link
      to={(location) => ({ ...location, pathname: `/postings/${posting.id}` })}
    >
      <article>
        <p>
          <span>ID: </span>
          {posting.id}
        </p>
        <p>
          <span>Price: </span>
          {posting.price}
        </p>
        <p>
          <span>Catg: </span>
          {posting.category}
        </p>
        <p>
          <span>Favorite: </span>
          {`${posting.favorited}`}
        </p>
      </article>
    </Link>
    <button type="button" onClick={() => toggleFavorite(posting.id)}>
      Favorite
    </button>
  </div>
);

PostingCard.propTypes = {
  posting: PropTypes.shape({
    id: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    favorited: PropTypes.bool.isRequired,
  }).isRequired,
};

export default PostingCard;
