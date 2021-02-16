import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Home from '../pages/Home';

import Post from '../pages/Post';

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/posts/:id" component={Post} />
  </Switch>
);

export default Routes;
