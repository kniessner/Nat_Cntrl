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

    socket.on('news', function (data) {
      console.log(data);

    });
    socket.on('message', function (data) {
      console.log(data);
      socket.emit('message', { answer: 'got message'});
    });

    socket.on('wire', function (data) {
      console.log(data);
      socket.emit('join', { client: window.location.hostname});
    });

    socket.on('c2c_wire', function (data) {
      console.log(data);
      socket.emit('c2c_wire', { hostname: window.location.hostname});
    });

    return (
      <div>
        <h1>Remote Panel</h1>
        <button className="remote client_server" onClick={this.sendServer}>
          Client -> Server
        </button>

        <button className="remote client_client" onClick={this.sendClient}>
          Client -> Client
        </button>

        <div className="chat_container">
        <ul id="messages"></ul>
           <form action="">
             <input id="m" autocomplete="off" /><button>Send</button>
           </form>
           </div>
      </div>
    )
  }
};


export default Remote_Panel;
