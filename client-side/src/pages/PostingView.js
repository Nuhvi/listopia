import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { toggleFavorite, fetchPostings } from '../actions';
import FavoriteButton from '../components/FavoriteButton';

const PostingNotFound = () => (
  <p>Posting Not Found</p>
);

const Posting = ({ postings, fetchPostings }) => {
  useEffect(() => {
    fetchPostings();
  }, [fetchPostings]);

  const { id } = useParams();
  const posting = postings.find((posting) => posting.id === Number(id));

  return posting ? (
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
        <span>Desc: </span>
        {posting.desc}
      </p>
      <p>
        <span>Catg: </span>
        {posting.category}
      </p>
      <p>
        <span>Favorite: </span>
        {`${posting.favorited}`}
      </p>
      <div>
        <FavoriteButton posting={posting} />
      </div>
    </article>
  ) : (
    <PostingNotFound />
  );
};

Posting.propTypes = {
  fetchPostings: PropTypes.func.isRequired,
  postings: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired,
      desc: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      favorited: PropTypes.bool.isRequired,
    }),
  ).isRequired,
};

const mapStateToProps = (state) => ({
  postings: state.postings.data,
});

const mapDispatchToProps = (dispatch) => ({
  toggleFavorite: (id) => dispatch(toggleFavorite(id)),
  fetchPostings: () => fetchPostings(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Posting);
