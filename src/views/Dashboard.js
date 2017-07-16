
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
      <div id="Dashboard" >
      <nav className="sub_nav">
        <button >
          Übersicht
        </button>
        <button className="active">
          Dashboard
        </button>
        <button>
          Dokumentation
        </button>
        <button>
          Elemente
        </button>

      </nav>

        <div className="inner_wrap ">
          <GridDrag />
        </div>
      </div>
    )
  }
};

export default Dashboard;
