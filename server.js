var path = require('path');
var express = require('express');
var app = express();
var PORT = process.env.PORT || 3030;
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var fs = require('fs');
const { exec } = require('child_process');
var device = require('express-device');
var heroku_server = require("socket.io-client")('http://motionwire.herokuapp.com/'); // This is a client connecting to the SERVER 2

//var google_api = require('./server_modules/google_init.js');
// using webpack-dev-server and middleware in development environment
if (process.env.NODE_ENV !== 'production') {
  var webpackDevMiddleware = require('webpack-dev-middleware');
  var webpackHotMiddleware = require('webpack-hot-middleware');
  var webpack = require('webpack');
  var config = require('./webpack.config');
  var compiler = webpack(config);

  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  }));
  app.use(webpackHotMiddleware(compiler));
}


var os = require('os');
var ifaces = os.networkInterfaces();
var server_ip;

Object.keys(ifaces).forEach(function (ifname) {
  var alias = 0;

  ifaces[ifname].forEach(function (iface) {
    if ('IPv4' !== iface.family || iface.internal !== false) {
      // skip over internal (i.e. 127.0.0.1) and non-ipv4 addresses
      return;
    }

    if (alias >= 1) {
      // this single interface has multiple ipv4 addresses
      console.log(ifname + ':' + alias, iface.address);
    } else {
      // this interface has only one ipv4 adress
      console.log(ifname, iface.address);
    }
    server_ip = iface.address;
    ++alias;
  });
});


//

app.use(express.static(path.join(__dirname, 'app')));

app.use(device.capture());

app.get('*', function(request, response) {
  console.log('device',request.device.type.toUpperCase());
  response.sendFile(__dirname + '/app/index.html')
});

app.get('/style/', function(request, response) {
  response.sendFile(__dirname + '/styleguide/index.html')
});



server.listen(PORT, function(error) {
  if (error) {
    console.error(error);
  } else {
    console.info('==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.', PORT, PORT);
}
});


/*
  EMITS
    io.emit() -> sends not to origin -> sends to all
    client.emit() -> sends only to origin
    client.broadcast.emit() -> sends not to origin
 */



  io.on('connection', function(client) {
    var clients = client.server.eio.clientsCount;
    var client_origin = client.handshake.headers.origin;
    //console.info('client connected!', 'id '+client.id,'clientsCount '+ clients );

    client.emit('message', { from: 'server' , title: 'your are connected', msg: 'your id is '+client.id });
    client.broadcast.emit('wire', { 'new client: ',client.id });
    console.log('\x1b[36m%s\x1b[0m','new client: ',client.id );


    client.on('wire', function(data) {
      console.log('\x1b[36m%s\x1b[0m','client:',data);
    });

    client.on('message', function(data) {
      console.log('\x1b[36m%s\x1b[0m','client message', data);
      client.broadcast.emit('message', { from: client.id , title: data.title, msg: data.msg });
    });

    client.on('log', function(data) {
      console.log('\x1b[42m%s\x1b[0m','client cmd', data);
      console.log([data]);
    });

    client.on('exec', function(cmd) {
      console.log('\x1b[42m%s\x1b[0m','client exec', cmd);
      exec(cmd, (error, stdout, stderr) => {
        if (error) {
          console.error(`exec error: ${error}`);
          return;
        }
        console.log('\x1b[42m%s\x1b[0m',`stdout: ${stdout}`);
        console.log('\x1b[42m%s\x1b[0m',`stderr: ${stderr}`);
      });
    });

    //client.emit('news',   {topic: 'update available\n'});
    //client.emit('message', {from: client.id ,title: 'hello world'});

    //client.emit('wire', {client_connected: client.id+"-"+client_origin});
    //client.emit('connected_clients', {id: client.id, origin: client_origin, route:'client-emit'});

    //io.emit('connected_clients', {id: client.id, origin: client_origin, route:'io-emit'});
    //client.broadcast.emit('connected_clients', {id: client.id, origin: client_origin, route:'client-broadcast-emit'});


    client.on('disconnect', function(){
      console.log('\x1b[38m%s\x1b[0m','client '+client.id + ' disconnected');
    });

    connectedDevices();
  });

//io.emit('wire', {server_connected: server_ip});
io.emit('connected_server', {name: 'localhost', ip: server_ip});

function connectedDevices(){
  io.clients((error, clients) => {
     if (error) throw error;
     console.log('\x1b[2m%s\x1b[0m','clients',clients); // => [6em3d4TJP8Et9EMNAAAA, G5p55dHhGgUnLUctAAAB]
     io.emit('connected_clients', clients);
   });
}


  heroku_server.on("connect",function(){
        console.log('\x1b[35m%s\x1b[0m','remote server connected');
        heroku_server.on('connected_server',function(data){
          console.log('\x1b[35m%s\x1b[0m','server',data);
          io.emit('connected_server', {name: 'heroku', ip: data});

        });
  });
