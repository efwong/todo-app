'use strict';

var express = require('express');
var stormpath = require('express-stormpath');

var routes = require('./lib/routes');
var path = require('path');
/**
 * Create the Express application.
 */
var app = express();

global.__approot = path.resolve(__dirname);

/**
 * Application settings.
 */
app.set('trust proxy',true);
//app.set('view engine', 'jade');
//app.set('views', './lib/views');
app.locals.siteName = 'Express-Stormpath Example Project';

/**
 * Stormpath initialization.
 */

console.log('Initializing Stormpath');

app.use(stormpath.init(app, {
  expand: {
    customData: true
  }
}));

/**
 * Route initialization.
 */
app.use('/', routes);

app.use('/', express.static(path.join(__dirname, 'lib/views')));

app.on('stormpath.ready',function () {
  console.log('Stormpath Ready');
});

/**
 * Start the web server.
 */
var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Server listening on http://localhost:' + port);
});

