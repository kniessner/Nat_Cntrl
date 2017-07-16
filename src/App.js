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

import Inner_Header from './components/Inner_Header';
import View_Header from './components/View_Header';
import Navigation from './components/Navigation';
import Book from './views/Book';

import React_Grid from './components/drag_grid';
import Motion_Grid from './components/motion_grid';
import Motion_Drag from './components/motion_drag';

import Main_Menu from './components/Menu';

import Pixeltracker from "./controller/Pixeltracker";
import Hand from './assets/images/hand_drw.svg';

import {screen_width, screen_height} from './util/screen.js';
import {scroll_top} from './util/scroll.js';




//  <View_Header title="Book"/>
//          <Main_Menu items={ ['Home', 'Services', 'About', 'Contact us'] } />

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    gest.options.subscribeWithCallback(function(gesture) {
	console.log('sww');//handle gesture .direction .up .down .left .right .error
});
var head = document.getElementsByTagName('head')[0];
var script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'https://raw.github.com/hadimichael/gest.js/master/src/gest.min.js';

script.onload = function() {
	document.addEventListener('gest', function(gesture) {
		if (gesture.left) {
			$('.next').trigger('click');
		} else if (gesture.right) {
			$('.prev').trigger('click');
		}
	}, false);

	gest.start();
};

head.appendChild(script);
    return (
      <div id="content">
        <Navigation />
        <section className="main_section">{this.props.children}</section>
        <section className="high_pres  test_area"></section>

    </div>

    )
  }
};
export default App;
