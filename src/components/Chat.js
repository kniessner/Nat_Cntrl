import React, {Component} from 'react';
import {socket_inbox} from '../util/sockets.js';


function Chat_Messages(props) {

  const mssgs = (
    <ul>
      {props.data}
    </ul>
  );

  return (
    <div>
      {mssgs}
    </div>
  );
}


class Chat extends React.Component {

  constructor(props) {
    super(props);
      this.state = {

        input: '',


      }

   this.handleOnChange = this.handleOnChange.bind(this)
   this.handleOnSubmit = this.handleOnSubmit.bind(this)
   //this._handleMessageEvent = this._handleMessageEvent.bind(this)
  }
    componentDidMount(){
      console.log('mes'+this.props.data);
      self = this;
      this.props.socket.on('message', function (data) {
        console.log('message',data);
      });
    }

   handleOnChange = (e) => {
      this.setState({ input: e.target.value });
   }
   handleOnSubmit = (e) => {
      e.preventDefault();
      this.props.socket.emit('message', { 'from': window.location.hostname, 'title': 'sending', 'msg': 'sending a message'} );
      this.setState({ input: '' });
    }


  render() {

    return (
            <div>
              <form onSubmit={this.handleOnSubmit}>
                <label htmlFor="fullName">Messages</label>
                  <input
                    type="text"
                    value={this.state.input}
                    onChange={this.handleOnChange}
                    name="input" />
                <input type="submit" value="Submit" />
              </form>
                <ul>

                 </ul>
              <Chat_Messages data={this.props.data}/>

              <p>{this.state.input}</p>
            </div>
          )
  }
};
export default Chat;
