export const category = null;

export const postings = {
  pending: false,
  error: null,
  data: [],
};

export const favorites = {
  pending: false,
  error: null,
  data: [],
};

export default {
  user: { data: null, pending: true },
  category,
  postings,
  favorites,
};