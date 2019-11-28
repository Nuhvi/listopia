import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import App from '../components/App';
import SignIn from '../components/SignIn';
import { signOut } from '../actions';

const mapStateToProps = (state) => ({
  userData: state.user.data,
});

const mapDispatchToProps = (dispatch) => ({
  signOut: () => dispatch(signOut()),
});

const Auth = ({ userData, signOut }) => (
  <div style={{ height: '100%' }}>
    {userData ? <App /> : <SignIn />}
    <button onClick={signOut} type="button">
        SignOut
    </button>
  </div>
);

Auth.propTypes = {
  userData: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }),
  signOut: PropTypes.func.isRequired,
};

Auth.defaultProps = {
  userData: null,
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
