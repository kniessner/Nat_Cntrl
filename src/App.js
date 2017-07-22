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
/******** UTILITIES
*
*
************/
import {socket,connection_socket,socket_inbox} from './util/sockets.js';
socket.emit('message', { 'from': window.location.hostname, 'title': 'sending', 'msg': 'sending a message'});

class App extends React.Component {

  static propTypes = {
    //onLayoutChange: PropTypes.func.isRequired
  };

  static defaultProps = {
    className: "App"
  };

  state = {
    mounted: false,
    messages:[]
  };

  componentDidMount() {
    this.setState({mounted: true});
    let that = this;
      socket.on('message', function (data) {
        that.setState({ ...that.state, messages: [].concat(that.state.messages, 1) }, () => {
            console.log('neue nachricht');
        });

      });
    }

  render() {

    return (
        <div id="content">
          <Navigation>
            {Nav_Elements}
          </Navigation>

            <Chat socket={socket} data={this.state.messages}/>
            {window.location.hostname}
          <Grid className="main_section">
            {this.props.children}
          </Grid>
        </div>
    )
  }
};
export default App;
