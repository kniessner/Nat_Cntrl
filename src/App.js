/**
 * @file
 * The Entry Point
 *
 * The extra line between the end of the @file docblock
 * and the file-closure is important.
 */

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
import Info_Bar from './components/Info_Bar';
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
        mounted:false,
        id:'',
        connected:false,
        port: ''
      }
  }

  componentWillMount() {
    socket.on('connect', () => {
      this.setState({
        id: socket.id,
        connected: socket.connected,
        port: socket.io.engine.port
      });
    });
  }
  componentDidMount() {
      this.setState({mounted: true});
  }

  render() {
    return (
        <div id="content">
          <Navigation>
            {Nav_Elements}
          </Navigation>
          <Info_Bar socket={socket}/>


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
