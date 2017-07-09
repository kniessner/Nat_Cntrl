/**
 * @file
 * The Entry Point
 *
 * The extra line between the end of the @file docblock
 * and the file-closure is important.
 */

import '../../assets/stylesheets/base.scss';

import React, { Component } from 'react';
import {Tracker,ColorTracker,ObjectTracker} from 'tracking';
import {Row, Col} from 'pui-react-grids';
import {Grid, FlexCol} from 'pui-react-flex-grids';
import {Divider} from 'pui-react-dividers';

import React_Grid from '../../components/drag_grid';
import Motion_Grid from '../../components/motion_grid';
import Motion_Drag from '../../components/motion_drag';
import Pixeltracker from "../../controller/Pixeltracker";
import Hand from '../..assets/hand_drw.png';


class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container bg-glow" id="content">
        <h1>Usability Konzepte & neue Interaktionswege</h1>
        <h3>Analyse und Recherche Sascha-Darius Knießner</h3>
          <Divider />
        <div className="test_area">
          <h4>Chapters</h4>
          <Divider />
          <img src={Hand}/>

          <ol>
            <li>Usability</li>
            <li>Neue Technologien</li>
            <li>Neue Interaktionswege</li>
            <li>Back to "normal" - Nutzerorientierete Bedienkonzepte</li>
          </ol>
        </div>
      </div>
    )
  }
};
export default App;
