//var multi_proxy = require('./sub_server/multi_proxy.js');

module.exports = function (app,server) {
require('./server_modules/socket_base.js')(server);
require('./sub_server/multi_proxy.js');



}
