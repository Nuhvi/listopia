import { createSelector } from 'reselect';

const getGategory = (state) => state.category;
const getPostings = (state) => state.postings.data;

export const filterPostingsByCategory = createSelector(
  getGategory,
  getPostings,
  (category, postings) => (
    category
      ? postings.filter((posting) => posting.category === category)
      : postings
  ),
);

export const filterFavoritedPostings = createSelector(
  getPostings,
  (postings) => (
    postings.filter((posting) => posting.favorited)
  ),
);
