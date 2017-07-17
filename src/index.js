/**
 * @file
 * INDEX
 *
 * Settings up routes to subpages and include navbar
 *
 */

import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch ,Link  } from 'react-router-dom';

import App from './App';
import Book from './views/Book';
import Modules from './views/Modules';
import About from './views/About';
import NotFound from './views/NotFound';
import Leap from './views/Leap/Leap';
import Track from './views/Track';
import Dashboard from './views/Dashboard';
import Remote_Panel from './views/Remote_Panel';

/**
 * A shape.
 * NOTE Test
 */

const Routes = () => (
  <App>
  <main>
    <Switch>
      <Route exact path='/' component={Book}/>
      <Route path='/about' component={About}/>
      <Route path='/dashboard' component={Dashboard}/>
      <Route path='/modules' component={Modules}/>
      <Route path='/leap' component={Leap}/>
      <Route path='/remote_panel' component={Remote_Panel}/>
    </Switch>
    </main>
  </App>
)

//

ReactDOM.render((
  <BrowserRouter>
    <Routes />
  </BrowserRouter>
), document.getElementById('root'))

//document.body.classList.remove('loading');
