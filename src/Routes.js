import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch ,Link  } from 'react-router-dom';

import App from './App';
import About from './views/About';
import NotFound from './views/NotFound';
import Leap from './views/Leap/Leap';
import Track from './views/Track';
import Dashboard from './views/Dashboard';
import Remote_Panel from './views/Remote_Panel';



const Routes = () => (
    <BrowserRouter>
    <main>
    <Switch>
      <Route name="app" path='/' handler={App}>
        <Route name="about" path='/test' handler={About}/>
      </Route>
      <Route path='/about' component={About}/>
      <Route path='/dashboard' component={Dashboard}/>

      <Route path='/app' component={App}/>
      <Route path='/leap' component={Leap}/>
      <Route path='/track' component={Track}/>
    </Switch>
  </main>
  </BrowserRouter>
)



export default Routes;
