import { combineReducers } from 'redux';
import realEstates from './real-estates';
import user from './user';

export default combineReducers({ user, realEstates });
