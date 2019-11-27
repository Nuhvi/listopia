export default (state = 'pending', action) => {
  switch (action.type) {
    case 'AUTHENTICATE_USER':
      return action.userId ? 'true' : 'false';
    default:
      return state;
  }
};
