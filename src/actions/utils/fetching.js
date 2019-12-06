import axios from 'axios';
import url from '../../config/api';

const fetchPending = (types) => ({
  type: types.FETCH_PENDING,
});

const fetchSuccess = (types, data) => ({
  type: types.FETCH_SUCCESS,
  data,
});

const fetchError = (types, error) => ({
  type: types.FETCH_ERROR,
  error,
});

export default ({ dispatch, types, path }) => {
  dispatch(fetchPending(types));
  axios
    .get(url(path))
    .then((response) => {
      if (response.error) {
        throw response.error;
      }
      dispatch(fetchSuccess(types, response.data));
    })
    .catch((error) => {
      dispatch(fetchError(types, error));
    });
};