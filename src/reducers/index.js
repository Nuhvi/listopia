import { combineReducers } from 'redux';
import postings from './postings';
import user from './user';
import category from './category';
import favorites from './favorites';


export default combineReducers({
  user, postings, category, favorites,
});
