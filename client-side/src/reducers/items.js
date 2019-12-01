export default (state = [], action) => {
  switch (action.type) {
    case 'TOGGLE_FAVORITE':
      return state.map((item) => (item.id === action.id
        ? { ...item, favorite: !item.favorite }
        : item));
    case 'FETCH_ITEMS':
      fetch('https://listopia-srvr.herokuapp.com/api/v1/postings', { mode: 'cors' })
        .then((res) => res.text())
        .then((data) => {
          console.log(data);
        });
      return state.map((item) => (item.id === action.id
        ? { ...item, favorite: !item.favorite }
        : item));
    default:
      return state;
  }
};
