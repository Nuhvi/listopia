import { combineReducers } from 'redux';
import realEstates from './real-estates';
import user from './user';
import category from './category';

export default combineReducers({ user, realEstates, category });
