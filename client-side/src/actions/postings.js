import { postings } from './types';

export const fetchProductsPending = () => ({
  type: postings.FETCH_PENDING,
});

export const fetchProductsSuccess = (products) => ({
  type: postings.FETCH_SUCCESS,
  products,
});

export const fetchProductsError = (error) => ({
  type: postings.FETCH_ERROR,
  error,
});
