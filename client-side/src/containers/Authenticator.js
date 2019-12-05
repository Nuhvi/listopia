import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import App from '../components/App';
import SignIn from '../components/SignIn';

const mapStateToProps = (state) => ({
  userData: state.user.data,
});

const Auth = ({ userData }) => (
  <div style={{ height: '100%' }}>
    {userData ? <App /> : <SignIn />}
  </div>
);

Auth.propTypes = {
  userData: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }),
};

Auth.defaultProps = {
  userData: null,
};

export default connect(mapStateToProps)(Auth);
