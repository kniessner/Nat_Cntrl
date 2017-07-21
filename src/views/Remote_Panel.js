import React, { Component } from 'react';
import io from 'socket.io-client';
import {sendServer,sendMessage,serverCMD,serverExec} from '../util/sockets.js';


class Remote_Panel extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
        <h1>Remote Panel</h1>
        <button className="remote client_server" onClick={this.sendServer}>
          Hello : Client -> Server
        </button>
        <button className="remote client_server" onClick={sendServer}>
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
