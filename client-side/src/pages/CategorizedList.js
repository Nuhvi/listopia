import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import PostingCard from '../components/PostingCard';
import filterPostingsByCategory from '../selectors';
import { setCategory } from '../actions';
import Loading from '../components/Loading';

const CategorizedList = ({ postings, setCategory }) => {
  const { category } = useParams();
  setCategory(category);

  const [state] = useState({ loading: true });

  useEffect(() => {
    fetch('http://localhost:3000/api/v1/postings')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  });

  return (
    <div>
      {state.loading ? <Loading /> : <h1>{category}</h1>}
      {postings.map((item) => (
        <PostingCard key={item.id} item={item} />
      ))}
    </div>
  );
};

CategorizedList.propTypes = {
  setCategory: PropTypes.func.isRequired,
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
  postings: filterPostingsByCategory(state),
});

const mapDispatchToProps = (dispatch) => ({
  setCategory: (category) => dispatch(setCategory(category)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CategorizedList);
