import { createMuiTheme } from '@material-ui/core/';

const defaultTheme = createMuiTheme();

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
  spacing: (n) => `${n * 8}px`,
  shadows: [
    'none',
    '0px 0px 5px 1px rgba(0,0,0,.1)',
    ...defaultTheme.shadows.slice(2),
  ],
});
