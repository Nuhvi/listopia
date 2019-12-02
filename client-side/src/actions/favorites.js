import { favorites } from './types';
import fetching from './utils/fetching';

export const fetchFavorites = (dispatch) => fetching({
  dispatch,
  types: favorites,
  path: 'favorites',
});

export const toggleFavorite = (dispatch) => {
  dispatch();
};
