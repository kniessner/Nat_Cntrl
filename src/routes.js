/**
 * @file
 * OLD FILE
 *
 *
 *OLD ROUTER
 */
import React from 'react';
import { Router, Route } from 'react-router'

import App from './views/App';
import About from './views/About';
import NotFound from './views/NotFound';

//NOTE This react-router is obsolet

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={App} />
    <Route path="/about" component={About} />
    <Route path="*" component={NotFound} />
  </Router>
);

export default Routes;
