
/**
 * @file
 * The Entry Point
 *
 * The extra line between the end of the @file docblock
 * and the file-closure is important.
 */

import '../assets/stylesheets/base.scss';
import React, { Component } from 'react';
import {Row, Col} from 'pui-react-grids';
import {Grid, FlexCol} from 'pui-react-flex-grids';
import {Divider} from 'pui-react-dividers';

import GridDrag from '../components/Grid';



class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    }

  render() {
    return (
      <div className="container bg-glow" id="content">
        <h1>Dashboard</h1>
        <Divider />
        <h4>Modular Widgets</h4>

        <div className="test_area ">
          <GridDrag />
        </div>
      </div>
    )
  }
};

export default Dashboard;
