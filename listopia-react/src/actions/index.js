export const fetchingUserPending = () => ({
  type: 'FETCHING_USER_PENDING',
});

export const signIn = (userName) => ({
  type: 'SIGN_IN',
  userName,
});

export const signOut = () => ({
  type: 'SIGN_OUT',
});
