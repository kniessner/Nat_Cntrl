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
import Info_Bar from './components/Info_Bar';
//import Search from './components/Search';
import Messenger from './views/Messenger';
import Chat from './components/Chat';
import Finder from './components/Finder';
import Carousel from './components/Carousel_Content';


/********
* UTILITIES
*
* loading socke streams
************/
import {socket,socket_init,socket_inbox} from './util/sockets.js';
import WpApi from './util/WpApi';

const Sub_Elements = () =>
      <ul>
        <li className="sub_menu_element">
          <Link to='/'>Home</Link>
        </li>
        <li className="sub_menu_element">
          <Link to='/dashboard'>Try</Link>
        </li>
        <li className="sub_menu_element">
          <Link to='/modules'>Modules</Link>
        </li>
      </ul>;




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
          <Navigation main_elements={Nav_Elements} sub_elements={Sub_Elements}>

          </Navigation>
          <Info_Bar socket={socket}/>


          <Carousel>
            <div>
              <img src="http://localhost:3030/images/1.jpeg" />
            </div>
            <div>
              <img src="./images/2.jpeg" />
            </div>

            <div>
              <Messenger socket={socket}/>
              <Chat socket={socket}/>
              <Finder socket={socket}/>
            </div>

            {this.props.children}
          </Carousel>


          <div className="container" id="modules">

          </div>




        </div>
    )
  }
};
export default App;
