export default (state = [], action) => {
  switch (action.type) {
    case 'TOGGLE_FAVORITE':
      return state.map((item) => (item.id === action.id
        ? { ...item, favorite: !item.favorite }
        : item));
    default:
      return state;
  }
};
