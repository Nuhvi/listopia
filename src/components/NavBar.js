import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import HomeIcon from '@material-ui/icons/Home';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import PropTypes from 'prop-types';
import FilterListIcon from '@material-ui/icons/FilterList';

const NavBar = ({ className, location }) => (
  <BottomNavigation
    value={location.pathname}
    showLabels
    className={className}
    component="nav"
  >
    <BottomNavigationAction
      label="Home"
      value="/home"
      icon={<HomeIcon />}
      component={Link}
      to="/home"
    />
    <BottomNavigationAction
      label="Favorites"
      value="/favorites"
      icon={<FavoriteBorderIcon />}
      component={Link}
      to="/favorites"
    />
    <BottomNavigationAction
      label="Categories"
      value="/categories"
      icon={<FilterListIcon />}
      component={Link}
      to="/categories"
    />
  </BottomNavigation>
);

NavBar.propTypes = {
  location: PropTypes.string.isRequired,
  className: PropTypes.string,
};

NavBar.defaultProps = {
  className: '',
};

export default withRouter(NavBar);
