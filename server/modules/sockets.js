const log = require('./console_mod.js');
const { exec } = require('child_process');
const clients = [];
const remote_server = ['http://motionwire.herokuapp.com/'];
function socket_handshake(x){
  return x.handshake.headers;
}


module.exports = function (server) {
  const io = require('socket.io')(server);

  io.on('connect', function(client) {
    let client_origin =  'localhost';
    log.sys('Client connected...'+ client.id);
    let header = socket_handshake(client);
    if(header.origin){
      log.sys('origin > ',header.origin);
    }else{
      log.sys('header > ',header);
    }

    client.on('register', function(data){
      log.sys('client ', 'connected', client.id);
    });
    client.on('disconnect', function(data){
      log.sys('client', 'disconnected', client.id);
    });
    client.on('wire', function(data) {
      log.client(client.id,'wire',data );
    });
    client.on('log', function(data) {
      log.client(client.id,'log',data );
    });

    client.on('message', function(data) {
      client.broadcast.emit('message', { from:  data.from  ,title: data.title, msg: data.msg  });
    });

    client.on('exec', function(cmd) {
      log.client(client.id,'exec',cmd);
        var child = exec(cmd);
        child.stdout.on('data', function(data) {
            console.log('stdout: ' + data);
            var lines = data.toString().split('\n');
            var results = new Array();
            lines.forEach(function(line) {
                var parts = line.split('=');
                results[parts[0]] = parts[1];
            });
            client.emit('display', {type:'array', name:'exec_out', data: lines, raw: data});

        });
        child.stderr.on('data', function(data) {
            console.log('stdout: ' + data);
        });
        child.on('close', function(code) {
            console.log('closing code: ' + code);
        });

    });

    client.on('sys', function(data) {
      console.log('sys',data);
      switch(data) {
          case 'client':
              log.sys('client send header ',header);
              client.emit('display', {type:'object', name:'client_header', data: header});
              break;
         case 'sys':
              //client.broadcast.emit('data', {'sys'});
              break;
          default:
          client.emit('display', {type:'string', name:'error', data:'no sys data found'});
      }
    });


    /**
    * Emits
    */
    //client.emit('display', {type:'string', name:'message', data:'hello'});

    io.emit('message', { from:  'server'  ,title:'new client', msg: client.id });

  });
}
/*
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
*/
