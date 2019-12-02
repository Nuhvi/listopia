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

export const toggleFavorite = (id) => ({
  type: 'TOGGLE_FAVORITE',
  id,
});

export { fetchPostings } from './postings';

export { default as setCategory } from './category';