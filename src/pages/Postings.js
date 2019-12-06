import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PostingCard from '../components/PostingCard';
import { fetchPostings } from '../actions';
import filterPostingsByCategory from '../selectors';
import Layout from './Layout';
import CustomGrid from '../components/CustomGrid';

const Postings = ({
  postings, pending, fetchPostings, category,
}) => {
  useEffect(() => {
    fetchPostings();
  }, [fetchPostings]);

  return (
    <Layout title="Home" pending={pending}>
      <CustomGrid>
        {postings.map((posting) => (
          <li key={posting.id}>
            <PostingCard posting={posting}>{category}</PostingCard>
          </li>
        ))}
      </CustomGrid>
    </Layout>
  );
};

Postings.propTypes = {
  category: PropTypes.string.isRequired,
  fetchPostings: PropTypes.func.isRequired,
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
  category: state.category,
});

const mapDispatchToProps = (dispatch) => ({
  fetchPostings: () => fetchPostings(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Postings);
