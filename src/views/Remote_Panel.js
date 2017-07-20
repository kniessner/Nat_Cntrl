import React, { Component } from 'react';
import io from 'socket.io-client';


class Remote_Panel extends React.Component {
  constructor(props) {
    super(props);
  }
  sendServer(e) {
    e.preventDefault();
    socket.emit('message', { title: 'hello' });
  }

  sendMessage(e) {
    e.preventDefault();
    socket.emit('message', {title: 'my host', msg: window.location.hostname});
  }

  serverCMD(e){
    e.preventDefault();
    socket.emit('log', 'client.server.eio' );
  }
  serverExec(e){
    e.preventDefault();
    socket.emit('exec', 'client.server' );
  }

  render() {

    return (
      <div>
        <h1>Remote Panel</h1>
        <button className="remote client_server" onClick={this.sendServer}>
          Hello : Client -> Server
        </button>

        <button className="remote client_server" onClick={this.serverCMD}>
          Show connected devices
        </button>
        <button className="remote client_server" onClick={this.serverExec}>
          Execute CMD
        </button>
        <input id="exec_value" autocomplete="off" />
        <hr/>
        <button className="remote client_client" onClick={this.sendMessage}>
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
