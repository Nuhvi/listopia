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
      favorite: true,
    },
    {
      id: 12,
      price: 20,
      desc: 'greeba',
      category: 'Apartment',
      favorite: false,
    },
    {
      id: 3,
      price: 100,
      desc: 'groo',
      category: 'Room',
      favorite: false,
    },
  ],
};

export default createStore(reducer, initialState);
