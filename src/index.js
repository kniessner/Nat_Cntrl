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

import Routes from './Routes';

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



ReactDOM.render((
    <Routes />
), document.getElementById('root'))

//document.body.classList.remove('loading');
