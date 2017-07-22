const log = require('./console_mod.js');
const heroku_server = require("socket.io-client")('http://motionwire.herokuapp.com/'); // This is a client connecting to the SERVER 2
const { exec } = require('child_process');
/*
const server = require('http').createServer();
const io = require('socket.io')(server);
server.listen(3000);
 */


/*
  EMITS
    io.emit() -> sends not to origin -> sends to all
    client.emit() -> sends only to origin
    client.broadcast.emit() -> sends not to origin
 */
module.exports = function (server) {
  const io = require('socket.io')(server);

 var clients =[];

  function connectedDevices(){
    io.clients((error, clients) => {
       if (error) throw error;
       log.sys('connected clients', clients);
       io.emit('connected_clients', clients);
     });
  }

  io.on('connection', function(client) {
    var client_origin =  'localhost';
    var clients = client.server.eio.clientsCount;

    log.sys('new client', client.id);

    if(client.handshake.headers.origin){ client_origin = client.handshake.headers.origin; }

    client.on('register', function(data){
      log.sys('registering ', data.socket_id+" "+ client.id);
    });

    client.on('disconnect', function(data){
      log.sys('client', client.id);
    });

    client.on('storeClientInfo', function (data) {
            var clientInfo          = new Object();
            clientInfo.customId     = data.customId;
            clientInfo.clientId     = socket.id;
            clients.push(clientInfo);
            console.log (clients);
    });

    client.on('wire', function(data) {
      log.client(client.id,'wire',data );
    });

    client.on('message', function(data) {
      log.client(client.id,'message',data );
      client.broadcast.emit('message', { from: client.id , title: data.title, msg: data.msg });
    });

    client.on('log', function(data) {
      log.client(client.id,'log',data );
    });

    client.on('exec', function(data) {
      log.client(client.id,'exec',data);
      exec(cmd, (error, stdout, stderr) => {
        if (error) {
          console.error(`exec error: ${error}`);
          return;
        }
        log.sys('exec',`stdout: ${stdout}`);
        log.sys('exec',`stderr: ${stderr}`);
      });
    });

    client.emit('message', { from: 'server' , title: 'hekko', msg: 'your id is '+client.id });

    client.emit('message', { from: 'server' , title: 'your are connected', msg: 'your id is '+client.id });
    client.broadcast.emit('wire', { new_client: client.id , client_host: client_origin});

    //connectedDevices();
  });

  heroku_server.on("connect",function(){
        log.sys('new server', 'heroku');
        heroku_server.on('connected_server',function(data){
          log.server('heroku',data);
          io.emit('connected_server', {name: 'heroku', ip: data});
        });
  });

}
