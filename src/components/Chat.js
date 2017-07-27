import React, {Component} from 'react';
import {socket, socket_inbox, socket_in_ping} from '../util/sockets.js';

function Item(props) {
  return <li>{props.data.from} : <b>{props.data.title}</b> -> {props.data.msg}</li>;
}

function Chat_Messages(props) {
  return (
    <div>
      {props.data.map(function(object, i) {
        return <Item data={object} key={i}/>;
      })}
    </div>
  );
}

class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      output: '',
      messages: []

    }

    this.handleOnChange = this.handleOnChange.bind(this)
    this.handleOnSubmit = this.handleOnSubmit.bind(this)
    this._handleMessageEvent = this._handleMessageEvent.bind(this)

  }

  componentWillMount() {
    var example = {   'from': 'you:'+ window.location.hostname,
                      'title': 'testing',
                      'msg': 'you are online'
                };
    var allMessages = this.state.messages;
    allMessages.push(example);
    this.setState({
      messages: allMessages
    });
  }

  componentDidMount() {
    this._handleMessageEvent()

  }

  _handleMessageEvent(){
    socket.on('message', (inboundMessage) => {
      var allMessages = this.state.messages;
      allMessages.push(inboundMessage);
        this.setState({
          messages: allMessages
        });
      })
  }

  handleOnChange = (e) => {
    e.preventDefault();
    this.setState({input: e.target.value});
  }

  handleOnSubmit = (e) => {
    e.preventDefault();
    var form = e.target;
    var content = form.elements['content'].value;
    socket.emit('message', {
      'from': socket.id,
      'title': '-Y> '+window.location.hostname,
      'msg': content
    });
    this.setState({input: ''});
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <label htmlFor="fullName">Messages</label>
          <input type="text"
            name='content'
            value={this.state.input}
            onChange={this.handleOnChange}
            />
          <input type="submit" value="Submit"/>
        </form>
        <ul>
          {this.state.messages.map(function(object, i) {
            return <Item data={object} key={i}/>;
          })}
        </ul>
        <p>{this.state.input}</p>
      </div>
    )
  }
};
export default Chat;
