const fs = require('fs');
const nodemon = require('nodemon');
const path = require('path');
const express = require('express');
const app = express();
const server = require('http').createServer(app);
const React = require('react');
const ReactEngine = require('react-engine');
const jsx = require('node-jsx');
const chalk = require('chalk');
const log = console.log;
var os = require('os');
os.cpus();

const error = chalk.bold.red;
const warning = chalk.keyword('orange');



// Use RGB colors in terminal emulators that support it.
log(chalk.keyword('orange')('Yay for orange colored text!'));
log(chalk.rgb(123, 45, 67).underline('Underlined reddish color'));
log(chalk.hex('#DEADED').bold('Bold gray!'));

require('./server/server_modules/globals.js')(app);
require('./server/server_modules/google_init.js');
jsx.install();

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
/*var engine = ReactEngine.server.create({

    see the complete server options spec here:
    https://github.com/paypal/react-engine#server-options-spec

});*/
var engine = require('react-engine').server.create({
  reactRoutes: path.normalize(__dirname+'/src/Routes.jsx')
});

// set the engine
app.engine('.jsx', engine);

// set the view directory
app.set('views', __dirname + '/src/views');

// set jsx or js as the view engine
// (without this you would need to supply the extension to res.render())
// ex: res.render('index.jsx') instead of just res.render('index').
app.set('view engine', 'js');

// finally, set the custom view
app.set('view', require('react-engine/lib/expressView'));




app.use(express.static(path.join(__dirname, 'app')));

app.use('/', require(__dirname + '/server/routes/index'));
app.use('/api', require(__dirname + '/server/routes/api'));

app.get('*', function(request, response) {
  response.sendFile(__dirname + '/app/index.html')
});
app.get('/style/', function(request, response) {
  response.sendFile(__dirname + '/styleguide/index.html')
});



var server1 = app.listen(8080, function () {
    var host = server.address().address;
    console.log('Listening at http://%s:%s', host, 8080);
})

server.listen(PORT, function(error) {
  var addr = server.address();
  console.log('ad',addr.port);
  if (error) {
    console.error(error);
  } else {
    console.info('==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.', PORT,PORT);

    require('./server/server_modules/socket_base.js')(server);

  }
});


/********************* ARCHIV SNIPPETS
`******************/
/*


app.use('/', function(req, res) {
  var books = [{
    title: 'Professional Node.js',
    read: false
  }, {
    title: 'Node.js Patterns',
    read: false
  }];

  res.setHeader('Content-Type', 'text/html');
  res.end(React.renderToStaticMarkup(
    React.DOM.body(
      null,
      React.DOM.div({
        id: 'root',
        dangerouslySetInnerHTML: {
          __html: React.renderToString(React.createElement(TodoBox, {
            data: data
          }))
        }
      }),
      React.DOM.script({
        'id': 'initial-data',
        'type': 'text/plain',
        'data-json': JSON.stringify(data)
      }),
      React.DOM.script({
        src: '/bundle.js'
      })
    )
  ));
});
 */
