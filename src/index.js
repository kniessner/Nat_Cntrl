/**
 * @file
 * INDEX
 *
 * Settings up routes to subpages and include navbar
 *
 */
 import React from 'react';
 import ReactDOM from 'react-dom';
 import Routes  from './Routes';
 import {BrowserRouter} from 'react-router-dom';

 ReactDOM.render((
          <BrowserRouter>
            <Routes />
          </BrowserRouter>
 ), document.getElementById('root'))
