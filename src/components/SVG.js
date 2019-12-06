import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  image: (props) => ({
    padding: props.size,
    backgroundColor: `${props.color}`,
    mask: `url(${props.icon}) no-repeat center`,
    maskSize: 'contain',
  }),
});

const SVG = ({
  color, icon, className, size,
}) => {
  const [sizeValue, sizeUnit] = size.match(/(\d.+?)(\D.*)/).slice(1);
  size = `${sizeValue / 2}${sizeUnit}`;

  const classes = useStyles({
    color,
    icon,
    size,
  });

  return <img className={`${classes.image} ${className}`} alt="" />;
};

SVG.propTypes = {
  color: PropTypes.string,
  className: PropTypes.string,
  size: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

SVG.defaultProps = {
  color: 'black',
  className: '',
};

export default SVG;
