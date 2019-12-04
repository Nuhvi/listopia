import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PostingView from '../pages/PostingView';
import NotFound from '../pages/404';
import Favorites from '../pages/Favorites';
import Categories from '../pages/Categories';
import Postings from '../pages/Postings';

document
  .querySelector('meta[name=theme-color]')
  .setAttribute('content', 'rgba(0,0,0,0)');

const Container = styled.div`
  position: relative;
  height: 100%;
  min-width: 320px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default () => (
  <Container>
    <Router>
      <Switch>
        <Route path="/" exact>
          <Categories />
        </Route>
        <Route path="/postings/category/:category">
          <Postings />
        </Route>
        <Route path="/postings/:id/" exact>
          <PostingView />
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
