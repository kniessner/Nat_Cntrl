import $ from 'jquery'
import React, { Component } from 'react';
import io from 'socket.io-client';
let socket = io('http://localhost:3030/');

export function init_client_sockets(){
  //connect to local server
  socket.emit('wire', {
    hostname: window.location.hostname,
    CodeName:navigator.appCodeName,
    Name:navigator.appName,
    Agent:navigator.userAgent
  });
  //connect to base server

}

export function get_socket_messages(){

  socket.on('news', function (data) {
    console.log('News' ,data);
  });

  socket.on('message', function (data) {
    console.log('message',data);
  });

  socket.on('wire', function (data) {
    console.log('Wire ', data);
   });

  socket.on('connected_server', function (data) {
    console.log('Connected_server', data);
  });

  socket.on('connected_clients', function (data) {
    console.log('Connected_clients ', data);
  });

  socket.on('c2c_wire', function (data) {
    console.log(data);
  });
}

export class SocketButton {
  render() {
    <div>
      Button
    </div>
  }
};
export function emit_socket_actions(){
  //let socket = io('http://localhost:3030/');
}
export function sendServer(e) {
  e.preventDefault();
  socket.emit('message', { title: 'hello' });
}

export function sendMessage(e) {
  e.preventDefault();
  socket.emit('message', {title: 'my host', msg: window.location.hostname});
}

export function serverCMD(e){
  e.preventDefault();
  socket.emit('log', 'client.server.eio' );
}
export function serverExec(e){
  e.preventDefault();
  socket.emit('exec', 'client.server' );
}
