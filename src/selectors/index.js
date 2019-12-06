import { createSelector } from 'reselect';

const getGategory = (state) => state.category;
const getPostings = (state) => state.postings.data;

export default createSelector(
  getGategory,
  getPostings,
  (category, postings) => (
    category === 'All'
      ? postings
      : postings.filter((posting) => posting.category === category)
  ),
);