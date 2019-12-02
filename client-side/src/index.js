import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import Auth from './containers/Authenticator';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <Auth />
  </Provider>,
  document.getElementById('root'),
);
