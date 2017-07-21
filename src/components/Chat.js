import React, {Component} from 'react';

class Chat extends React.Component {

  constructor(props) {
    super(props);
      this.state = {
        input: '',
        messages: 'nada'
      }

   this.handleOnChange = this.handleOnChange.bind(this)
   this.handleOnSubmit = this.handleOnSubmit.bind(this)
   //this._handleMessageEvent = this._handleMessageEvent.bind(this)
  }
    componentDidMount(){
      self = this;
      this.props.socket.on('message', function (data) {
        console.log('message',data);
        self.setState({ messages: data});
      });
    }

   handleOnChange = (e) => {
      this.setState({ input: e.target.value });
   }
   handleOnSubmit = (e) => {
      e.preventDefault();
      console.log(this.state.input);
      this.props.socket.emit('message', { from: window.location.hostname, title: 'cheers', msg: this.state.input } );
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


              <p>{this.state.messages}</p>
              <p>{this.state.input}</p>
            </div>
          )
  }
};
export default Chat;
