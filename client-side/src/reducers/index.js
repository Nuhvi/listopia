import { combineReducers } from 'redux';
import items from './items';
import user from './user';
import category from './category';

export default combineReducers({ user, items, category });
