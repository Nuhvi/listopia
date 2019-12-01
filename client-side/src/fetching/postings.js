import axios from 'axios';
import { fetchPending, fetchSuccess, fetchError } from '../actions/postings';

export default (dispatch) => {
  dispatch(fetchPending());
  axios
    .get('https:/listopia-srvr.herokuapp.com/api/v1/postings')
    .then((response) => {
      if (response.error) {
        throw response.error;
      }
      dispatch(fetchSuccess(response.data));
    })
    .catch((error) => {
      dispatch(fetchError(error));
    });
};
