'use strict';
/*
* Add Home related routes here
*/

var express = require('express');
var stormpath = require('express-stormpath');
var router = express.Router();
var path = require('path');

/*
* Get Home Page
*/
router.get('/', stormpath.getUser, function(req, res) {
  //res.sendFile(path.join(__approot, 'lib/views/home/home.html'));
  res.render('home');
});


module.exports = router;