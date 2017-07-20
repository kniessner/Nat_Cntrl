import $ from 'jquery'
import React, { Component } from 'react';
import io from 'socket.io-client';


export function init_client_sockets(){
  let socket = io('http://localhost:3030/');
  //connect to local server
  socket.emit('wire', { client_connected: window.location.hostname});
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


export function emit_socket_actions(){
  //let socket = io('http://localhost:3030/');
}
