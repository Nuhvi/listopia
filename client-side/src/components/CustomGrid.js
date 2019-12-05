import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  grid: ({
    display: 'grid',
    gridGap: theme.spacing(1),
    margin: theme.spacing(1),
    gridTemplateColumns: '1fr 1fr',
    [theme.breakpoints.up('sm')]: {
      gridTemplateColumns: '1fr 1fr 1fr',
    },
  }),
}));

const CustomGrid = ({ children }) => {
  const classes = useStyles();
  return (
    <section
      className={classes.grid}
    >
      {children}
    </section>
  );
};

CustomGrid.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default CustomGrid;
