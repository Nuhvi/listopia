import React from 'react';
import PropTypes from 'prop-types';
import { Container, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    width: '100%',
    paddingTop: '3rem',
    backgroundColor: 'white',
    borderBottom: `3px solid ${theme.palette.grey[100]}`,
  },
  main: {
    flexGrow: '1',
    paddingTop: '1rem',
  },
  container: {
    maxWidth: '1024px',
    margin: 'auto',
  },
}));

const Layout = ({
  title, children, mainColor, pending, error,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {title ? (
        <header className={classes.header}>
          <Container className={classes.container}>
            <Typography variant="h4" color="textPrimary" gutterBottom>
              {title}
            </Typography>
          </Container>
        </header>
      ) : (
        ''
      )}
      {pending ? (<p>Loading...</p>) : ''}
      {error ? (<p>Something Went Wrong!</p>) : ''}
      {!pending && !error ? (
        <main className={classes.main} style={{ backgroundColor: mainColor }}>
          <div className={classes.container}>
            {children}
          </div>
        </main>
      ) : ''}

    </div>
  );
};

Layout.propTypes = {
  title: PropTypes.string.isRequired,
  mainColor: PropTypes.string,
  children: PropTypes.element.isRequired,
  pending: PropTypes.bool,
  error: PropTypes.bool,
};

Layout.defaultProps = {
  mainColor: '',
  pending: false,
  error: false,
};

export default Layout;
