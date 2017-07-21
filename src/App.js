/**
 * @file
 * The Entry Point
 *
 * The extra line between the end of the @file docblock
 * and the file-closure is important.
 */
import React, {Component} from 'react';
import {Tracker, ColorTracker, ObjectTracker} from 'tracking';
import {Row, Col} from 'pui-react-grids';
import {Grid, FlexCol} from 'pui-react-flex-grids';
import {Divider} from 'pui-react-dividers';


import './assets/stylesheets/base.scss';
import {screen_width, screen_height} from './util/screen.js';
import {scroll_top} from './util/scroll.js';

import {init_client_sockets} from './util/sockets.js';


import Navigation   from './components/Navigation';
import Nav_Elements from './components/Nav_Elements';
import Time from './components/Time';





init_client_sockets();



class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
        <div id="innerwrap">
          <Navigation>
            {Nav_Elements}
          </Navigation>
          {Time}
            {window.location.hostname}
          <section id="content" className="main_section">
            {this.props.children}
          </section>
        </div>
    )
  }
};
export default App;
