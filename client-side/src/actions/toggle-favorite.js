import axios from 'axios';
import { postings, favorites } from './types';
import url from '../config/api';

export default (dispatch, id) => {
  dispatch({
    type: postings.TOGGLE_FAVORITE,
    id,
  });
  dispatch({
    type: favorites.TOGGLE_FAVORITE,
    id,
  });

  axios.post(url(`favorites/${id}/toggle`));
};
