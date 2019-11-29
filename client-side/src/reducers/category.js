export default (state = null, action) => {
  switch (action.type) {
    case 'SET_CATEGORY':
      return action.category;
    default:
      return state;
  }
};
