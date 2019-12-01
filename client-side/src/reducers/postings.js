import { postings } from '../actions/types';
import { postings as initialState } from '../store/initial-states';

export default (state = initialState, action) => {
  switch (action.type) {
    case postings.FETCH_PENDING:
      return {
        ...state,
        pending: true,
      };
    case 'TOGGLE_FAVORITE':
      return state.map((item) => (item.id === action.id
        ? { ...item, favorite: !item.favorite } : item));
    default:
      return state;
  }
};

// fetch('https://listopia-srvr.herokuapp.com/api/v1/postings', { mode: 'cors' })
//   .then((res) => res.text())
//   .then((data) => {
//     console.log(data);
//   });
// return state.map((item) => (item.id === action.id
//   ? { ...item, favorite: !item.favorite }
//   : item));
