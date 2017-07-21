import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch ,Link  } from 'react-router-dom';

import App from './App';
import Book from './views/Book';
import About from './views/About';
import NotFound from './views/NotFound';
import Leap from './views/Leap/Leap';
import Track from './views/Track';
import Dashboard from './views/Dashboard';
import Remote_Panel from './views/Remote_Panel';



const Routes = () => (
        <App>
        <main>
            <Switch>
              <Route path='/' component={Book} exact/>
              <Route path='/about' component={About}/>
              <Route path='/book' component={Book}/>
              <Route path='/dashboard' component={Dashboard}/>
              <Route path='/remote' component={Remote_Panel}/>
              <Route path='/track' component={Track}/>
            </Switch>
        </main>
        </App>
)



export default Routes;
