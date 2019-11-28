import { createStore } from 'redux';
import reducer from './reducers';

const initialState = {
  user: { data: null, pending: true },
  category: null,
  items: [
    {
      id: 1,
      price: 10,
      desc: 'gree',
      category: 'Apartment',
    },
    {
      id: 12,
      price: 20,
      desc: 'greeba',
      category: 'Apartment',
    },
    {
      id: 3,
      price: 100,
      desc: 'groo',
      category: 'Room',
    },
  ],
};

export default createStore(reducer, initialState);
