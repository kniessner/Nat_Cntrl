import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch ,Link  } from 'react-router-dom';

import App from './App';
import About from './views/About';
import NotFound from './views/NotFound';
import Leap from './views/Leap/Leap';
import Track from './views/Track';
import Dashboard from './views/Dashboard';



const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={App}/>
      <Route path='/about' component={About}/>
      <Route path='/dashboard' component={Dashboard}/>
      <Route path='/app' component={App}/>
      <Route path='/leap' component={Leap}/>
      <Route path='/track' component={Track}/>
    </Switch>
  </main>
)


const Routes = () => (
  <BrowserRouter>
    <Navigation />
    <Main />
  </BrowserRouter>
)
