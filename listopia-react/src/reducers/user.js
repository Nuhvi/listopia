export default (state = { data: null, pending: false }, action) => {
  switch (action.type) {
    case 'FETCHING_USER_PENDING':
      return { ...state, pending: true };
    case 'FETCHING_USER_SUCCESS':
      return { ...state, pending: false };
    case 'SIGN_IN':
      localStorage.setItem('userName', action.userName);
      return { data: { name: action.userName }, pending: false };
    case 'SIGN_OUT':
      localStorage.removeItem('userName');
      return { data: null, pending: false };
    default:
      return state;
  }
};
