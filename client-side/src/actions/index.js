export const fetchingUserPending = () => ({
  type: 'FETCHING_USER_PENDING',
});
export const fetchingUserSuccess = () => ({
  type: 'FETCHING_USER_SUCCESS',
});

export const signIn = (userName) => ({
  type: 'SIGN_IN',
  userName,
});

export const signOut = () => ({
  type: 'SIGN_OUT',
});

export { default as fetchFavorites } from './favorites';

export { default as fetchPostings } from './postings';

export { default as setCategory } from './category';

export const toggleFavorite = (id) => ({
  type: 'TOGGLE_FAVORITE',
  id,
});