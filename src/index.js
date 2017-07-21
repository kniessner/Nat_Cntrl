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
 //import Client  from 'react-engine/lib/client';
 import {BrowserRouter} from 'react-router-dom';

 /**
  * A shape.
  * NOTE Test
  */



 ReactDOM.render((
        <BrowserRouter>
            <Routes />
          </BrowserRouter>
 ), document.getElementById('root'))
