
module.exports = function (app) {
  const express = require('express');
  const server = require('http').createServer(app);
  const path = require('path');

app.use(express.static(path.join(__dirname, 'app')));

app.get('*', function(request, response) {
  response.sendFile(__dirname + '/app/index.html')
});

app.get('/style/', function(request, response) {
  response.sendFile(__dirname + '/styleguide/index.html')
});

server.listen(PORT2, function(error) {
var host = server.address().address;
  if (error) {
    console.error(error);
  } else {
    console.info('==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.', PORT2);
    require('./server/server_modules/socket_base.js')(server);
  }
});

}
