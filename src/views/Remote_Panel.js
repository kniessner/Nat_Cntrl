import React, { Component } from 'react';
import io from 'socket.io-client';
let socket = io('http://localhost:3030/');


class Remote_Panel extends React.Component {
  constructor(props) {
    super(props);
  }
  sendServer(e) {
    e.preventDefault();
    //console.log('Send ... to server.');
    socket.emit('message', { title: 'hello' });
  }
  render() {
    return (
      <div>
        <h1>Remote Panel</h1>
        <button className="remote send_server" onClick={this.sendServer}>
          Hello Server
        </button>

      </div>
    )
  }
};


export default Remote_Panel;
