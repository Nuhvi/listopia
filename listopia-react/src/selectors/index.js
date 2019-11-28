import { createSelector } from 'reselect';

const getGategory = (state) => state.category;
const getItems = (state) => state.items;

export default createSelector(
  getGategory,
  getItems,
  (category, items) => (
    category
      ? items.filter((item) => item.category === category)
      : items
  ),
);
