import '../assets/stylesheets/base.scss';

import React, { Component } from 'react';
import {Row, Col} from 'pui-react-grids';
import {Grid, FlexCol} from 'pui-react-flex-grids';
import {Tracker, ColorTracker, ObjectTracker} from 'tracking';

import {Divider} from 'pui-react-dividers';
//import {Leap,screenPosition,hand} from 'leapjs';
//import leapShell from 'leapShell';
//const shellCommand = 'echo "hallo"';

class Tracking_board extends React.Component {
  constructor(props) {
    super(props);

  }

/*
*Description Testarea for Camera and Leaprtracking
*
*
*/
  componentDidMount() {
  }


  render() {
    return (
      <div className="container" id="content">
        <h1>Tracking Mirror</h1>
        <Divider />
        <div className="test_area" ref="test_area">
        </div>
      </div>
    )
  }
};

export default Tracking_board;
