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
    socket.emit('c2c_wire', { hostname: window.location.hostname});
  }

  serverCMD(e){
      e.preventDefault();
      socket.emit('log', 'eio' );
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
      socket.emit('wire', { client_connected: window.location.hostname});
    });

    socket.on('c2c_wire', function (data) {
      console.log(data);
      socket.emit('c2c_wire', { hostname: window.location.hostname});
    });

    return (
      <div>
        <h1>Remote Panel</h1>
        <button className="remote client_server" onClick={this.sendServer}>
          Hello : Client -> Server
        </button>

        <button className="remote client_server" onClick={this.serverCMD}>
          Show connected devices
        </button>

        <hr/>
        <button className="remote client_client" onClick={this.sendClient}>
          Hello : Client -> Client
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
