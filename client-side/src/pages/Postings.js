import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import PostingCard from '../components/PostingCard';
import { setCategory } from '../actions';
import fetchPostings from '../fetching/postings';
import { filterPostingsByCategory } from '../selectors';

const Postings = ({ postings, setCategory, pending }) => {
  const { category } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    setCategory(category);
    fetchPostings(dispatch);
  }, [category, setCategory, dispatch]);

  return (
    <div>
      {pending ? <div>Looding</div> : ''}
      <h1>{category}</h1>
      {postings.map((posting) => (
        <PostingCard key={posting.id} posting={posting} />
      ))}
    </div>
  );
};

Postings.propTypes = {
  setCategory: PropTypes.func.isRequired,
  pending: PropTypes.bool.isRequired,
  postings: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired,
      category: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

const mapStateToProps = (state) => ({
  postings: filterPostingsByCategory(state),
  pending: state.postings.pending,
});

const mapDispatchToProps = (dispatch) => ({
  setCategory: (category) => dispatch(setCategory(category)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Postings);
