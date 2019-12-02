export default ({ initialState, types }) => (state = initialState, action) => {
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
    case types.TOGGLE_FAVORITE:
      return {
        ...state,
        data: state.data.map((posting) => (posting.id === action.id
          ? { ...posting, favorited: !posting.favorited }
          : posting)),
      };
    default:
      return state;
  }
};
