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
import Hand from '../../assets/images/hand_drw.svg';

import {screen_width,screen_height} from '../../util/screen.js';



class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(screen_width());
    return (
      <div  id="content">

        <section className="low_pres main_section">
          <h1>Usability in Arbeit 4.0</h1>
          <h3>Digital Workspace - Kooperation statt Interaktion </h3>
        </section>
        <section className="high_pres main_section test_area">
          <h4>Chapters</h4>
          <Divider />
          <ol>
            <li>Usability</li>
            <li>Neue Technologien</li>
            <li>Neue Interaktionswege</li>
            <li>Back to "normal" - Nutzerorientierete Bedienkonzepte</li>
          </ol>
        </section>
      </div>
    )
  }
};
export default App;
