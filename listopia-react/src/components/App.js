import React from 'react';
import styled from 'styled-components';
import {
  BrowserRouter as Router, Switch, Route, Link,
} from 'react-router-dom';
import Categories from '../pages/Categories';
import List from '../pages/List';
import Item from '../pages/Item';
import NotFound from '../pages/404';


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
        <Route path="/list/:category" exact>
          <List />
        </Route>
        <Route path="/list/item/:id">
          <Item />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  </Container>
);
