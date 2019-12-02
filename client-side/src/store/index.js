import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from '../reducers';
import { category, postings } from './initial-states';

const initialState = {
  user: { data: null, pending: true },
  category,
  postings,
};

const middlewares = [logger, thunk];

export default createStore(
  rootReducer,
  initialState,
  applyMiddleware(...middlewares),
);
