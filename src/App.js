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
//import Search from './components/Search';
import Chat from './components/Chat';
/******** UTILITIES
*
*
************/
import {socket,connection_socket,socket_inbox} from './util/sockets.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    }

  }

  componentWillMount(){
    
          test.push('test');
          this.setState({messages:newArray})
    }
  componentDidMount(){
      socket.on('message', function (data) {
        console.log('neue nachricht');
          var newArray = this.state.messages.slice();
          newArray.push(data);
          this.setState({messages:newArray})
      });
    }

  render() {
      console.log(connection_socket,socket);
      socket.emit('message', { 'from': window.location.hostname, 'title': 'sending', 'msg': 'sending a message'});
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
