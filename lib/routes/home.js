'use strict';

var bodyParser = require('body-parser');
var express = require('express');
var stormpath = require('express-stormpath');
var router = express.Router();
var path = require('path');

router.get('/', stormpath.getUser, function(req, res) {
  //res.render('home');
  res.sendFile(path.join(__approot, 'lib/views/home/home.html'));
});


module.exports = router;