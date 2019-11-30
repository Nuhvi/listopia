import React from 'react';
import styled from 'styled-components';
import {
  BrowserRouter as Router, Switch, Route, Link,
} from 'react-router-dom';
import ItemView from '../pages/ItemView';
import NotFound from '../pages/404';
import Favorites from '../pages/Favorites';
import Categories from '../pages/Categories';
import CategorizedList from '../pages/CategorizedList';

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
      <Link to="/favorites">Favorites</Link>

      <Switch>
        <Route path="/" exact>
          <Categories />
        </Route>
        <Route path="/items/:id/" exact>
          <ItemView />
        </Route>
        <Route path="/items/category/:category">
          <CategorizedList />
        </Route>
        <Route path="/favorites">
          <Favorites />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  </Container>
);