import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { CssBaseline, ThemeProvider } from '@material-ui/core/';
import Auth from './containers/Authenticator';
import store from './store';
import theme from './config/theme';

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Auth />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root'),
);
