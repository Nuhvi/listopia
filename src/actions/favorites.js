import { favorites } from './types';
import fetching from './utils/fetching';

export default (dispatch) => fetching({
  dispatch,
  types: favorites,
  path: 'favorites',
});
