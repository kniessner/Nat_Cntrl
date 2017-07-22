import React, {Component} from 'react';
import {socket_inbox} from '../util/sockets.js';

function Item(props) {
  return <li>{props.message}</li>;
}
function Chat_Messages(props) {
  return (
    <div>
    {props.data.map((message) => <Item key={message} message={message} />)}
    </div>
  );
}


class Chat extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        input: '',
        output:''

      }
   this.handleOnChange = this.handleOnChange.bind(this)
   this.handleOnSubmit = this.handleOnSubmit.bind(this)
  }

  componentDidMount(){
    console.log('mes '+this.props.data);

    let that = this;
      this.props.socket.on('message', function (data) {
        that.setState({messages: [].concat(data, 1) }, () => {
          console.log('messages',data);

          console.log('neue nachricht');
        });

      });
  }

   handleOnChange = (e) => {
      this.setState({ input: e.target.value });
   }
   handleOnSubmit = (e) => {
      e.preventDefault();
      this.props.socket.emit('message', { 'from': window.location.hostname, 'title': 'sending', 'msg': this.state.input} );
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
