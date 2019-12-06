import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  grid: ({
    width: '100%',
    display: 'grid',
    gridGap: theme.spacing(1),
    margin: theme.spacing(1),
    gridTemplateColumns: 'repeat(2, calc(50% - 12px))',
    [theme.breakpoints.up('sm')]: {
      gridTemplateColumns: 'repeat(3, calc(33% - 8px))',
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
