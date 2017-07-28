import '../assets/stylesheets/messenger.scss';

import React, { Component } from 'react';
import {Grid, FlexCol} from 'pui-react-flex-grids';

function Item_Collection(props) {
  //console.log(props);
      return (
        <li className="list_content collection">
          {
            Object.keys(props.data).map(function(item,i){
                console.log('list:',item+ " "+props.data[item]+ " "+i);
                return (
                    <p key={i}>
                    <b>{item}: </b>{props.data[item]}
                    </p>
                );
              })
          }
        </li>
      );
}
function Item_Error(props) {
  return <li className="list_content error">{props.data} </li>;
}

function Item_List(props) {
  return (
    <li className="list_content collection">
      {
        Object.keys(props.data).map(function(item){
          if(props.data[item]){
            return (
                <p key={item}>
                  {props.data[item]}
                </p>
            );
          }
        })
      }
    </li>
  );
}
function Item_Message(props) {
  return <li className="list_content message">{props.data} </li>;
}
function Action_Buttons(props) {
  return <li className="list_content message">{props.data} </li>;
}

class Form extends React.Component {
  constructor(props) {
    super(props);
    }

  render() {
    return (
      <div id="Home" >
        <h1>
            Form
        </h1>
      </div>
    )
  }
};


class Control_Board extends React.Component {
constructor(props) {
  super(props);
    this.state = {
      input: '',
      connection: false,
      output: '',
      messages: []

    }
    this.getClientHeader = this.getClientHeader.bind(this)

    this.handleOnChange = this.handleOnChange.bind(this)
    this.handleOnSubmit = this.handleOnSubmit.bind(this)
    this._handleMessageEvent = this._handleMessageEvent.bind(this)
  }

  componentWillMount() {

  }

  componentDidMount() {
    console.log(this.props.socket);
    this.props.socket.on('connect', () => {
      this.setState({
        connection: true
      });
      //this.props.socket.emit('sys', 'client');
    });
    this._handleMessageEvent();
  }

  _handleMessageEvent(){
        this.props.socket.on('display', (inboundMessage) => {
        var allMessages = this.state.messages;
        allMessages.push(inboundMessage);
          this.setState({
            messages: allMessages
          });
      });
  }

  getClientHeader = (e) => {
    e.preventDefault();
    console.log('clicked');
    this.props.socket.emit('sys', 'client');
    }

    handleOnChange = (e) => {
      e.preventDefault();
      this.setState({input: e.target.value});
    }

    handleOnSubmit = (e) => {
      e.preventDefault();
      var form = e.target;
      var content = form.elements['content'].value;
      var allMessages = this.state.messages;
        allMessages.push({type:'string', name:'self', data: content});
          this.setState({
            messages: allMessages
          });

      this.props.socket.emit('exec', content);
      this.setState({input: ''});
    }

  render() {
    console.log(this.state.messages);
    return (
      <div id="messenger" >
        <h1>
            Messenger
        </h1>

          <button onClick={this.getClientHeader}>get Client Header</button>
          <button onClick={this.getFolder}>get Client Header</button>
          <Form />
          <form onSubmit={this.handleOnSubmit}>
            <input
              type="text"
              name='content'
              value={this.state.input}
              onChange={this.handleOnChange}
              />
            <input type="submit" value="Submit"/>
          </form>

           <ul className="stream">
             {this.state.messages.reverse().map(function(object, i) {
                console.log(object.name,object);
                switch(object.name) {
                    case 'client_header':
                        return <Item_Collection data={object.data} key={i}/>;
                        break;
                    case 'error':
                        return <Item_Error data={object.data} key={i}/>;
                        break;
                    case 'message':
                        return <Item_Message data={object.data} key={i}/>;
                        break;
                    case 'self':
                        return <Item_Message data={object.data} key={i}/>;
                        break;
                    default:
                        return <Item_List data={object.data} key={i}/>;
                        break;
                }
             })}
           </ul>
      </div>
    )
  }
};



export default Control_Board;
