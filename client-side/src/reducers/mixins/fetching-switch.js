export default ({ state, action, types }) => {
  switch (action.type) {
    case types.FETCH_PENDING:
      return {
        ...state,
        pending: true,
      };
    case types.FETCH_SUCCESS:
      return {
        ...state,
        pending: false,
        data: action.data,
      };
    case types.FETCH_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    default:
      return state;
  }
};
