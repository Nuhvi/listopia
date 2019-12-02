import { favorites } from '../actions/types';
import { favorites as initialState } from '../store/initial-states';
import fetchingSwitch from './mixins/fetching-switch';

export default (state = initialState, action) => {
  switch (action.type) {
    case favorites.TOGGLE_FAVORITE:
      return {
        ...state,
        data: state.data.filter((posting) => posting.id !== action.id),
      };
    default:
      return fetchingSwitch({ state, action, types: favorites });
  }
};
