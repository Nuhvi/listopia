import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import PostingCard from '../components/PostingCard';
import { setCategory, fetchPostings } from '../actions';
import { filterPostingsByCategory } from '../selectors';

const Postings = ({
  postings, setCategory, pending, fetchPostings,
}) => {
  const { category } = useParams();

  useEffect(() => {
    setCategory(category);
    fetchPostings();
  }, [category, setCategory, fetchPostings]);

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
  fetchPostings: PropTypes.func.isRequired,
  setCategory: PropTypes.func.isRequired,
  pending: PropTypes.bool.isRequired,
  postings: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

const mapStateToProps = (state) => ({
  postings: filterPostingsByCategory(state),
  pending: state.postings.pending,
});

const mapDispatchToProps = (dispatch) => ({
  setCategory: (category) => dispatch(setCategory(category)),
  fetchPostings: () => fetchPostings(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Postings);
