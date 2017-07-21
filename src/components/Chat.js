import React, {Component} from 'react';

class Chat extends React.Component {

  constructor(props) {
    super(props)
      this.state = {
        input: '',
        messages: 'nada'
      }

   this.handleOnChange = this.handleOnChange.bind(this)
   this.handleOnSubmit = this.handleOnSubmit.bind(this)
   this._handleMessageEvent = this._handleMessageEvent.bind(this)
  }
  componentDidMount(){
    this._handleMessageEvent()
  }
  _handleMessageEvent(){
    this.props.socket.on('message', function (data) {
      console.log('message',data);
      this.setState({ messages: data})
    });
  //  socket.on('message', (inboundMessage) => {
  //  })
  }
  handleOnChange(ev) {
    this.setState({ input: ev.target.value })
  }

   handleOnSubmit(ev) {
    ev.preventDefault()
    socket.emit('message',  this.state.input )
    this.setState({ input: '' })
   }
  render() {

    return (
            <div>
              <p>{this.state.messages}</p>
              <input type = "text" value = {this.state.input}
                  onChange = {this.handleOnChange}  />
                  <button bsStyle="primary" type="submit" onClick={this.handleOnSubmit}> Send </button>

               <h4>{this.state.input}</h4>
            </div>
             )
  }
};
export default Chat;
