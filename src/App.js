/**
 * @file
 * The Entry Point
 *
 * The extra line between the end of the @file docblock
 * and the file-closure is important.
 */

import './assets/stylesheets/base.scss';
import {screen_width, screen_height} from './util/screen.js';
import {scroll_top} from './util/scroll.js';
import {Video_Player,Camera_Test} from './util/media.js';


import React, {Component} from 'react';
import {Tracker, ColorTracker, ObjectTracker} from 'tracking';
import {Row, Col} from 'pui-react-grids';
import {Grid, FlexCol} from 'pui-react-flex-grids';
import {Divider} from 'pui-react-dividers';


import Navigation   from './components/Navigation';
import Nav_Elements from './components/Nav_Elements';

import Book         from './views/Book';




class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {


    return (
      <div id="content">

        <Navigation>
          {Nav_Elements}
        </Navigation>

        <section className="main_section">
          {this.props.children}
        </section>


    </div>

    )
  }
};
export default App;
