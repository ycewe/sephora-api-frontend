var express = require('express');
var path = require('path');

var app = express();
var connections = (process.env.NODE_ENV === 'production')
  ? require('./config/config.live') : require('./config/config.dev');

var url = connections.hostname + ':' + connections.port;

app.use(express.static(path.join(__dirname, './dist')));
app.listen(process.env.PORT || connections.port);

console.log('Serving on ' + url + ' in ' + connections.env);
