import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import App from './components/App';
import store from './store.js';
import SignIn from './components/SignIn';

ReactDOM.render(
  <Provider store={store}>
    {store.getState().user.data ? <App /> : <SignIn />}
  </Provider>,
  document.getElementById('root'),
);
