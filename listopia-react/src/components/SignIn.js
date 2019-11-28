import React, { useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import BounceLogo from './BounceLogo';
import Theme from '../config/theme';

import { fetchingUserPending, fetchingUserSuccess, signIn } from '../actions';

const Container = styled.div`
  position: absolute;
  top: 0;

  height: 100%;
  width: 100%;

  background-color: ${Theme.colors.highlight.main};
  color: white;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  transition: top 0.2s;

  &[data-authenticated='true'] {
    top: -100%;
    border-radius: 0 0 20px 20px;
  }
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 0;
  height: 0;
  overflow: hidden;

  transition-duration: 0.3s;
  transition-delay: 1s;

  &[data-authenticated='false'] {
    margin-top: 3rem;
    height: 150px;
  }

  input {
    border-bottom: 2px solid rgba(255, 255, 255, 0.5);
    color: white;

    &::placeholder {
      color: rgba(255, 255, 255, 0.5);
    }
  }
`;

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  signIn: (userName) => dispatch(signIn(userName)),
  fetchingUserPending: () => dispatch(fetchingUserPending()),
});

const SignIn = ({ user, fetchingUserPending, signIn }) => {
  const submitHandler = (e) => {
    e.preventDefault();
    signIn(e.target.name.value);
    document.activeElement.blur();
  };

  const waitingSeconds = (seconds) => new Promise((resolve) => {
    setTimeout(() => {
      resolve('resolved');
    }, seconds * 1000);
  });

  const checkSession = async () => {
    await waitingSeconds(1);

    const userName = localStorage.getItem('userName');

    if (userName) {
      await fetchingUserSuccess();
      await waitingSeconds(2);
      signIn(userName);
    }
  };

  useEffect(() => {
    console.log(user);
    if (!user.data) {
      if (!user.pending) fetchingUserPending();

      checkSession();
    }
  });

  return (
    <div>
      <Container data-authenticated={!!user.data}>
        <BounceLogo size="9rem" />
        <LoginForm
          onSubmit={submitHandler}
          data-authenticated={user.data || !user.pending}
        >
          <label htmlFor="name">
            <p>Username</p>
            <input type="text" id="name" placeholder="Name" />
          </label>

          <input type="submit" value="login" />
        </LoginForm>
      </Container>
    </div>
  );
};

SignIn.propTypes = {
  fetchingUserPending: PropTypes.func.isRequired,
  signIn: PropTypes.func.isRequired,
  user: PropTypes.shape({
    data: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
    pending: PropTypes.bool.isRequired,
  }).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
