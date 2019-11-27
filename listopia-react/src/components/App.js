import React from 'react';
import styled from 'styled-components';
import {
  BrowserRouter as Router, Switch, Route, Link,
} from 'react-router-dom';
import Appartments from '../pages/appartments';
import Home from '../pages';

document
  .querySelector('meta[name=theme-color]')
  .setAttribute('content', 'rgba(0,0,0,0)');

const Container = styled.div`
  position: relative;
  height: 100%;

  @media only screen and (min-width: 1025px) {
    margin: auto;
    margin-top: 20px;
    max-width: 375px;
    max-height: 812px;
    border-radius: 40px;
    overflow: hidden;
    border: 8px solid white;
    box-shadow: 0px 0px 12px 5px rgba(0, 0, 0, 0.2);
  }
`;

export default () => (
  <Container>
    <Router>
      <Link to="/">Home</Link>
      <Link to="/appartments">appartments</Link>

      <Switch>
        <Route path="/appartments">
          <Appartments />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  </Container>
);
