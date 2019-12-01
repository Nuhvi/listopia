import { createStore } from 'redux';
import reducer from './reducers';

const initialState = {
  user: { data: null, pending: true },
  category: null,
  items: [],
};

export default createStore(reducer, initialState);
