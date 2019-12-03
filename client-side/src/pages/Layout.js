import React from 'react';
import PropTypes from 'prop-types';
import {
  Container, Typography, makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    paddingTop: '3rem',
    backgroundColor: 'white',
    borderBottom: `3px solid ${theme.palette.grey[100]}`,
  },
  main: {
    flexGrow: '1',
    paddingTop: '1rem',
  },
}));

const Layout = ({ title, children, mainColor }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {title ? (
        <Container className={classes.header}>
          <Typography variant="h4" color="textPrimary" gutterBottom>
            {title}
          </Typography>
        </Container>
      ) : (
        ''
      )}
      <div
        className={classes.main}
        style={{ backgroundColor: mainColor }}
      >
        {children}
      </div>
    </div>
  );
};

Layout.propTypes = {
  title: PropTypes.string.isRequired,
  mainColor: PropTypes.string,
  children: PropTypes.element.isRequired,
};

Layout.defaultProps = {
  mainColor: '',
};

export default Layout;
