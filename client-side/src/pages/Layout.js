import React from 'react';
import PropTypes from 'prop-types';
import {
  Container, Typography, makeStyles, useTheme,
} from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  header: (props) => ({
    paddingTop: '3rem',
    backgroundColor: 'white',
    borderBottom: `2px solid ${props.borderColor}`,
  }),
  main: {
    flexGrow: '1',
    paddingTop: '1rem',
  },
});

const Layout = ({ title, children, mainColor }) => {
  const theme = useTheme();
  const classes = useStyles({ borderColor: theme.palette.grey[100] });

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
      <Container
        className={classes.main}
        style={{ backgroundColor: mainColor }}
      >
        {children}
      </Container>
    </div>
  );
};

Layout.propTypes = {
  title: PropTypes.string.isRequired,
  mainColor: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default Layout;
