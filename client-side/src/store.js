import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {
  user: { data: null, pending: true },
  category: null,
  postings: {
    pending: false,
    error: false,
    data: [],
  },
};

const middlewares = [thunk];

export default createStore(
  rootReducer,
  initialState,
  applyMiddleware(...middlewares),
);
