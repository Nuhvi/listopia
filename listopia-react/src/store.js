import { createStore } from 'redux';
import reducer from './reducers';

const initialState = {
  loggedIn: 'pending',
  realEstate: [
    {
      id: 1,
      price: 10,
      desc: 'gree',
      category: 'appartment',
    },
    {
      id: 2,
      price: 100,
      desc: 'groo',
      category: 'villa',
    },
  ],
};

export default createStore(reducer, initialState);
