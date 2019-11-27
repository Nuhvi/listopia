import { combineReducers } from 'redux';
import authenticated from './authenticated';
import realEstate from './real-estate';

export default combineReducers({ authenticated, realEstate });
