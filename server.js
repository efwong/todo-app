'use strict';

var express = require('express');
var stormpath = require('express-stormpath');

var routes = require('./lib/routes');
var path = require('path');
var app = express();

// keep track of app root path
global.__approot = path.resolve(__dirname);

/**
 * Application settings.
 */
app.set('trust proxy',true);
app.set('view engine', 'jade');
app.set('views', './lib/views/jade');

/**
 * Stormpath initialize with customData option */
app.use(stormpath.init(app, {
  expand: {
    customData: true
  }
}));

/**
 * Route initialization.
 */
app.use('/', routes);

// load static resource
app.use('/', express.static(path.join(__dirname, 'lib/views')));


app.on('stormpath.ready',function () {
  // only start webserver when stormpath is done
  var port = process.env.PORT || 3000;
  app.listen(port, function () {
    console.log('Server listening on http://localhost:' + port);
  });
});


