import React from 'react';
import styled from 'styled-components';
import {
  BrowserRouter as Router, Switch, Route, Link,
} from 'react-router-dom';
import Categories from '../pages/Categories';
import List from '../pages/List';

document
  .querySelector('meta[name=theme-color]')
  .setAttribute('content', 'rgba(0,0,0,0)');

const Container = styled.div`
  position: relative;
  height: 100%;
  max-width: 1024px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default () => (
  <Container>
    <Router>
      <Link to="/">Categories</Link>

      <Switch>
        <Route path="/" exact>
          <Categories />
        </Route>
        <Route path="/List/:category">
          <List />
        </Route>
      </Switch>
    </Router>
  </Container>
);
