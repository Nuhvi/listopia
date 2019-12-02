import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from '../reducers';
import initialState from './initial-states';

const middlewares = [logger, thunk];

export default createStore(
  rootReducer,
  initialState,
  applyMiddleware(...middlewares),
);
