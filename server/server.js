

module.exports = function (app) {
const server_ip = require('./server_modules/get_infos.js').server_ip;
const path = require('path');

const engine = require('react-engine').server.create({
  reactRoutes: path.normalize(path.join(__dirname, '/../src/Routes.jsx'))
});
// set the engine
app.engine('.jsx', engine);

// set the view directory
app.set('views', __dirname + '/src/views');

// set jsx or js as the view engine
// (without this you would need to supply the extension to res.render())
// ex: res.render('index.jsx') instead of just res.render('index').
app.set('view engine', 'jsx');

// finally, set the custom view
app.set('view', require('react-engine/lib/expressView'));

app.use('*', require(__dirname + '/server/routes/index'));
app.use('/api', require(__dirname + '/server/routes/api'));
app.use(express.static(path.join(__dirname, 'app')));



server.listen(PORT, function(error) {
var host = server.address().address;
  if (error) {
    console.error(error);
  } else {
    console.info('==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.', PORT);
    require('./server/server_modules/socket_base.js')(server);
  }
});


/*app.get('*', function(request, response) {
  response.sendFile(__dirname + '/app/index.html')
});
*/
    console.log(app.locals.title);
    console.log(server_ip);
}
