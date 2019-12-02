const fetchingTypes = {
  FETCH_PENDING: 'FETCH_PENDING',
  FETCH_SUCCESS: 'FETCH_SUCCESS',
  FETCH_ERROR: 'FETCH_ERROR',
};

const postingsListTypes = {
  ...fetchingTypes,
  TOGGLE_FAVORITE: 'TOGGLE_FAVORITE',
};

export const postings = {
  ...postingsListTypes,
};

export const favorites = {
  ...postingsListTypes,
};

export const user = {};
