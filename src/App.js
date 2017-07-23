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
        input: '',
        output:'',
        messages:[]
      }
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

            <Chat socket={this.socket} data={this.state.messages}/>
            {window.location.hostname}
          <Grid className="main_section">
            {this.props.children}
          </Grid>
        </div>
    )
  }
};
export default App;
