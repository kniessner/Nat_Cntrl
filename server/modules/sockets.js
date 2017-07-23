const log = require('./console_mod.js');
const { exec } = require('child_process');
const clients = [];
const remote_server = ['http://motionwire.herokuapp.com/'];


var socket_server = function(server) {
   console.log('hellov '+server);

}



function local_socket(local_server) {
    return require('socket.io')(local_server);
}
function remote_socket(remote_server) {
    return require('socket.io-client')(remote_server);
}

get_socketId = function(io) {
  io.on('connection', function(client) {
    console.log(client.id);
    return client.id;
  });
}

var  get_clients = function(socket) {
  socket.clients((error, clients) => {
     if (error) throw error;
     return clients;
   });
}

function socket_on(socket) {

}


module.exports = {
  clients:clients,
  local_socket:local_socket,
  remote_socket:remote_socket,
  socket_server:socket_server,
  remote_server:remote_server,
  get_socketId:get_socketId,
  get_clients:get_clients,
  socket_on:socket_on
}
