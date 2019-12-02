import { postings } from '../actions/types';
import { postings as initialState } from '../store/initial-states';
import fetchingSwitch from './mixins/fetching-switch';

export default (state = initialState, action) => {
  switch (action.type) {
    case postings.TOGGLE_FAVORITE:
      return {
        ...state,
        data: state.data.map((posting) => (posting.id === action.id
          ? { ...posting, favorited: !posting.favorited }
          : posting)),
      };
    default:
      return fetchingSwitch({ state, action, types: postings });
  }
};
