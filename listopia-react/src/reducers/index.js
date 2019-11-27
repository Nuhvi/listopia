import { combineReducers } from 'redux';
import realEstate from './real-estate';
import user from './user';

export default combineReducers({ user, realEstate });
