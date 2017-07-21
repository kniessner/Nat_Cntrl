/**
 * @file
 * The Entry Point
 *
 * The extra line between the end of the @file docblock
 * and the file-closure is important.
 */
import './assets/stylesheets/base.scss';
import React, {Component} from 'react';
import {Grid, FlexCol} from 'pui-react-flex-grids';
/******** COMPONENTS
*
*
*
*************/
import Navigation   from './components/Navigation';
import Nav_Elements from './components/Nav_Elements';
import Chat from './components/Chat';
/******** UTILITIES
*
*
************/
import {init_client_sockets,socket} from './util/sockets.js';


class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    init_client_sockets(socket);
    return (
        <div id="content">
          <Navigation>
            {Nav_Elements}
          </Navigation>
          <Chat socket={socket}/>
            {window.location.hostname}
          <Grid className="main_section">
            {this.props.children}
          </Grid>
        </div>
    )
  }
};
export default App;
