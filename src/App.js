/**
 * @file
 * The Entry Point
 *
 * The extra line between the end of the @file docblock
 * and the file-closure is important.
 */
//import '../../../node_modules/pui-css-all';
//import '../node_modules/pui-css-all';

import './assets/stylesheets/base.scss';
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Grid, FlexCol} from 'pui-react-flex-grids';
import {Label} from 'pui-react-labels';
/******** COMPONENTS
*
*
*
*************/
import Navigation   from './components/Navigation';
import Nav_Elements from './components/Nav_Elements';
//import Search from './components/Search';
import Messenger from './views/Messenger';
import Chat from './components/Chat';

/********
* UTILITIES
*
* loading socke streams
************/
import {socket,socket_init,socket_inbox} from './util/sockets.js';

class App extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        mounted:false
      }
  }


  componentDidMount() {
      this.setState({mounted: true});
    }

  render() {
    console.log('App');
    return (
        <div id="content">
          <Navigation>
            {Nav_Elements}
          </Navigation>

          <div  id="info_bar">
          <span  className="data_wrap">
            <h5>
            Host: <Label>{window.location.hostname}</Label>
            </h5>
          </span>
          <span  className="data_wrap">
            <h5>
            Ip: <Label>192.168.178.0</Label>
            </h5>
          </span>
          <span className="data_wrap">
            <h5>
            ID:  <Label>#lbcYIA6Itiw_vEYlAABa</Label>

            </h5>
          </span>
          </div>

          <div className="container" id="modules">
            <Messenger socket={socket}/>
            <Chat socket={socket}/>
          </div>

          {this.props.children}



        </div>
    )
  }
};
export default App;
