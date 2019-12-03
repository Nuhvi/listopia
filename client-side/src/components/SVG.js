import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  image: (props) => ({
    width: '100%',
    paddingTop: '100%',
    backgroundColor: `${props.color}`,
    mask: `url(${props.icon}) no-repeat center`,
    maskSize: 'contain',
  }),
});

const SVG = ({ color, icon, className }) => {
  const classes = useStyles({ color, icon });
  return (
    <div className={className}>
      <img className={classes.image} alt="" />
    </div>
  );
};

SVG.propTypes = {
  color: PropTypes.string,
  icon: PropTypes.string.isRequired,
  className: PropTypes.string,
};

SVG.defaultProps = {
  color: 'black',
  className: '',
};

export default SVG;
