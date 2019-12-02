import axios from 'axios';
import { postings } from './types';
import url from '../config/api';

const fetchPending = () => ({
  type: postings.FETCH_PENDING,
});

const fetchSuccess = (data) => ({
  type: postings.FETCH_SUCCESS,
  postings: data,
});

export const fetchError = (error) => ({
  type: postings.FETCH_ERROR,
  error,
});

export const fetchPostings = (dispatch) => {
  dispatch(fetchPending());
  axios
    .get(url('postings'))
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
