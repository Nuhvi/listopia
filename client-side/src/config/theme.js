import { createMuiTheme } from '@material-ui/core/';

export default createMuiTheme({
  typography: {
    fontFamily: [
      'Poppins',
      'Roboto',
      'sans-serif',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  palette: {
    primary: {
      main: '#c513af',
    },
    secondary: {
      main: '#17bebb',
    },
    neutral: {
      main: '#232a38',
      light: '#a7a9ac',
    },
    text: {
      primary: '#4d5360',
    },
  },
});