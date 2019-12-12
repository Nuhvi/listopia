import axios from 'axios';
import { postings, favorites } from './types';
import url from '../config/api';


export default (dispatch, id, favorited) => {
  if (favorited) {
    axios.delete(url(`favorites/${id}`));
  } else {
    axios({
      method: 'post',
      url: url('favorites/'),
      headers: {},
      data: {
        posting_id: id,
      },
    });
  }

  dispatch({
    type: postings.TOGGLE_FAVORITE,
    id,
  });
  dispatch({
    type: favorites.TOGGLE_FAVORITE,
    id,
  });
};
