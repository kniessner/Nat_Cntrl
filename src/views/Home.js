import React, { Component } from 'react';
import {Pane, BasePane} from 'pui-react-panes';


class Home extends React.Component {
  constructor(props) {
    super(props);
    }

  render() {
    console.log('home',this.props);
    return (
      <div id="Home" >
        <div className="head container">
          <h1>Welcome</h1>
        </div>

      </div>
    )
  }
};



export default Home;
