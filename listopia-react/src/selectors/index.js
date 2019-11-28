import { createSelector } from 'reselect';

const getGategory = (state) => state.category;
const getrealEstates = (state) => state.realEstates;

export default createSelector(
  getGategory,
  getrealEstates,
  (category, realEstates) => (
    category
      ? realEstates.filter((realEstate) => realEstate.category === category)
      : realEstates
  ),
);
