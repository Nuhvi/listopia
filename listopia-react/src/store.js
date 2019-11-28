import { createStore } from 'redux';
import reducer from './reducers';

const initialState = {
  user: { data: null, pending: true },
  category: null,
  realEstates: [
    {
      id: 1,
      price: 10,
      desc: 'gree',
      category: 'Apartment',
    },
    {
      id: 2,
      price: 100,
      desc: 'groo',
      category: 'Room',
    },
  ],
};

export default createStore(reducer, initialState);
