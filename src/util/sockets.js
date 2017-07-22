import $ from 'jquery'
import React, { Component } from 'react';
import io from 'socket.io-client';
let socket = io('http://localhost:3030/');

var connection_socket = false;

socket.on('connect', () => {
  connection_socket = true;
  socket.emit('register', { socket_id: socket.id });
  console.log(socket.id);
});

socket.on('disconnect', function() {
  connection_socket = false;
  console.log('Disconnected!');
});


function socket_inbox(slot){
  socket.on(slot, function (data) {
    return data;
  });
}
/*

  socket.on('news', function (data) {
    console.log('News' ,data);
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
*/
/*
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
*/
export { socket_inbox, connection_socket, socket, io };
