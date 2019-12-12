import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  grid: {
    padding: 0,
    display: 'grid',
    margin: `${theme.spacing(1).split('px')[0] / 2}px`,
    gridTemplateColumns: 'repeat(2, 50%)',
    [theme.breakpoints.up('sm')]: {
      gridTemplateColumns: `repeat(3, ${100 / 3}%)`,
    },
    '& > *': {
      margin: `${theme.spacing(1).split('px')[0] / 2}px`,
      listStyle: 'none',
    },
  },
}));

const CustomGrid = ({ children }) => {
  const classes = useStyles();
  return <ol className={classes.grid}>{children}</ol>;
};

CustomGrid.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default CustomGrid;
