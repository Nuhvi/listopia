import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import { category, postings } from './initial-states';

const initialState = {
  user: { data: null, pending: true },
  category,
  postings,
};

const middlewares = [thunk];

export default createStore(
  rootReducer,
  initialState,
  applyMiddleware(...middlewares),
);
