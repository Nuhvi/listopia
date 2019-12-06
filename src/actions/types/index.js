const fetchingTypes = (TYPE) => ({
  FETCH_PENDING: `FETCH_${TYPE}_PENDING`,
  FETCH_SUCCESS: `FETCH_${TYPE}_SUCCESS`,
  FETCH_ERROR: `FETCH_${TYPE}_ERROR`,
});

const postingsListTypes = (TYPE) => ({
  ...fetchingTypes(TYPE),
  TOGGLE_FAVORITE: `TOGGLE_${TYPE}_FAVORITE`,
});

export const postings = {
  ...postingsListTypes('POSTINGS'),
};

export const favorites = {
  ...postingsListTypes('FAVORITES'),
};

export const user = {};
