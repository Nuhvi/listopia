import React, { useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useTheme } from '@material-ui/core/styles';
import { Input } from '@material-ui/core';
import BounceLogo from './BounceLogo';
import { fetchingUserPending, fetchingUserSuccess, signIn } from '../actions';

const Container = styled.div`
  position: absolute;
  top: 0;

  height: 100%;
  width: 100%;

  background-color: ${(props) => props.background};
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
`;

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
      await waitingSeconds(0.5);
      signIn(userName);
    }
  };

  useEffect(() => {
    if (!user.data) {
      if (!user.pending) fetchingUserPending();

      checkSession();
    }
  });

  const mainColor = useTheme().palette.primary.main;

  return (
    <div>
      <Container background={mainColor} data-authenticated={!!user.data}>
        <BounceLogo size="9rem" color={mainColor} />
        <LoginForm
          onSubmit={submitHandler}
          data-authenticated={user.data || !user.pending}
        >
          <Input
            placeholder="Name"
            inputProps={{ 'aria-label': 'name', name: 'name' }}
          />

          <Input type="submit" value="login" />
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

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  signIn: (userName) => dispatch(signIn(userName)),
  fetchingUserPending: () => dispatch(fetchingUserPending()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
