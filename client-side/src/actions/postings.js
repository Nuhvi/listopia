import { postings } from './types';

export const fetchPending = () => ({
  type: postings.FETCH_PENDING,
});

export const fetchSuccess = (data) => ({
  type: postings.FETCH_SUCCESS,
  postings: data,
});

export const fetchError = (error) => ({
  type: postings.FETCH_ERROR,
  error,
});
