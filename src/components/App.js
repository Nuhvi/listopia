import React from 'react';
import styled from 'styled-components';
import {
  BrowserRouter as Router, Switch, Route, Redirect,
} from 'react-router-dom';
import PostingDetails from '../pages/PostingDetails';
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
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const App = () => (
  <Container>
    <Router>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/categories" />
          <Categories />
        </Route>
        <Route path="/home">
          <Postings />
        </Route>
        <Route path="/categories">
          <Categories />
        </Route>
        <Route path="/postings/:id/">
          <PostingDetails />
        </Route>
        <Route path="/favorites" exact>
          <Favorites />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  </Container>
);


export default App;
