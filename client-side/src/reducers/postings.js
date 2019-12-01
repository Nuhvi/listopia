import { postings } from '../actions/types';
import { postings as initialState } from '../store/initial-states';

export default (state = initialState, action) => {
  switch (action.type) {
    case postings.FETCH_PENDING:
      return {
        ...state,
        pending: true,
      };
    case postings.FETCH_SUCCESS:
      return {
        ...state,
        pending: false,
        data: action.postings,
      };
    case postings.FETCH_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    case 'TOGGLE_FAVORITE':
      return state.map((item) => (item.id === action.id
        ? { ...item, favorite: !item.favorite } : item));
    default:
      return state;
  }
};
