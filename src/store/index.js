import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from '../reducers';
import initialState from './initial-states';

const middlewares = process.env.NODE_ENV === 'development'
  ? ([thunk, logger])
  : ([thunk]);

export default createStore(
  rootReducer,
  initialState,
  applyMiddleware(...middlewares),
);
