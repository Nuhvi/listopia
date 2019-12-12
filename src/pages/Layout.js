import React from 'react';
import PropTypes from 'prop-types';
import { Container, Typography, makeStyles } from '@material-ui/core';
import NavBar from '../components/NavBar';

const useStyles = makeStyles((theme) => ({
  layout: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    width: '100%',
    paddingTop: `${theme.spacing(4)}`,
    marginBottom: `${theme.spacing(2)}`,
    backgroundColor: 'white',
    borderBottom: `3px solid ${theme.palette.grey[100]}`,
  },
  main: {
    flexGrow: '1',
    paddingBottom: theme.spacing(7),
  },
  container: {
    maxWidth: '1024px',
    width: '100vw',
    margin: 'auto',
  },
  bottom_nav: {
    position: 'fixed',
    bottom: 0,
    width: '100%',
    color: theme.palette.primary.main,
    borderTop: `2px solid ${theme.palette.grey[100]}`,
  },
}));

const Layout = ({
  title, children, mainColor, pending, error,
}) => {
  const classes = useStyles({ title });

  return (
    <div className={classes.layout}>
      {title ? (
        <header className={classes.header}>
          <Container className={classes.container}>
            <Typography
              variant="h4"
              component="h1"
              color="textPrimary"
              gutterBottom
            >
              {title}
            </Typography>
          </Container>
        </header>
      ) : (
        ''
      )}
      {pending ? <p>Loading...</p> : ''}
      {error ? <p>Something Went Wrong!</p> : ''}
      {!pending && !error ? (
        <main className={classes.main} style={{ backgroundColor: mainColor }}>
          <div className={classes.container}>{children}</div>
        </main>
      ) : (
        ''
      )}

      <NavBar className={classes.bottom_nav} pageTitle={title} />
    </div>
  );
};

Layout.propTypes = {
  title: PropTypes.string,
  mainColor: PropTypes.string,
  children: PropTypes.element.isRequired,
  pending: PropTypes.bool,
  error: PropTypes.bool,
};

Layout.defaultProps = {
  title: '',
  mainColor: '',
  pending: false,
  error: false,
};

export default Layout;
