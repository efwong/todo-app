'use strict';

var bodyParser = require('body-parser');
var express = require('express');
var stormpath = require('express-stormpath');
var router = express.Router();
var path = require('path');

router.get('/', stormpath.loginRequired, function(req, res) {
  //res.render('profile');
  res.sendFile(path.join(__approot, 'lib/views/todo/todo.html'));
});

module.exports = router;