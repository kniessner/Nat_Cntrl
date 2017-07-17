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
  sendClient(e) {
    e.preventDefault();
    //console.log('Send ... to server.');
    socket.emit('message', { c2c: 'hello' });
  }

  render() {
    return (
      <div>
        <h1>Remote Panel</h1>
        <button className="remote client_server" onClick={this.sendServer}>
          Client -> Server
        </button>

        <button className="remote client_client" onClick={this.sendClient}>
          Client -> Client
        </button>

      </div>
    )
  }
};


export default Remote_Panel;
