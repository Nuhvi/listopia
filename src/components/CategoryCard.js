import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Card, makeStyles, Typography, useTheme,
} from '@material-ui/core';
import SVG from './SVG';

const useStyles = makeStyles({
  card: {
    position: 'relative',
    paddingTop: '100%',
  },
  container: {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '1rem',
  },
});

const Category = ({ category, icon }) => {
  const theme = useTheme({});
  const classes = useStyles({});

  return (
    <Link to={`postings/category/${category}`}>
      <Card className={classes.card} component="section">
        <div className={classes.container}>
          <SVG
            size="60%"
            icon={icon}
            className={classes.icon}
            color={theme.palette.primary.main}

          />
          <Typography align="center" variant="subtitle1" component="h2">
            {category}
          </Typography>
        </div>
      </Card>
    </Link>
  );
};

Category.propTypes = {
  category: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Category;
