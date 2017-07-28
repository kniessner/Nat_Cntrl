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

            <Messenger socket={socket}/>

          <Grid className="main_section">
            {this.props.children}
          </Grid>
            {window.location.hostname}
        </div>
    )
  }
};
export default App;
