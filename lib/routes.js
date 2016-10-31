'use strict';

var bodyParser = require('body-parser');
var express = require('express');
var stormpath = require('express-stormpath');
var router = express.Router();
var path = require('path');
var userRoute = require('./routes/user');
var homeRoute = require('./routes/home');
var todoRoute = require('./routes/todo');


// router.get('/user', stormpath.getUser, function(req, res){

// });

// router.get('/', stormpath.getUser, function(req, res) {
//   //res.render('home');
//   res.sendFile(path.join(__approot, 'lib/views/home/home.html'));
// });

/**
 * When someone visits /profile, render the profile form.
 */

// router.get('/todo', stormpath.loginRequired, function(req, res) {
//   //res.render('profile');
//   res.sendFile(path.join(__approot, 'lib/views/todo/todo.html'));
// });

/**
 * When someone posts the profile form, read the data and save it to the
 * custom data object on the account.  The body-parser library is used
 * for parsing the form data.
 */

router.use('/', homeRoute);
router.use('/user', userRoute);
router.use('/todo', todoRoute);

router.post('/profile', bodyParser.urlencoded({extended: false}), stormpath.loginRequired, function(req, res, next) {
  for (var key in req.body) {
    req.user.customData[key] = req.body[key];
  }

  req.user.customData.save(function(err) {
    if (err) {
      return next(err);
    }
    res.render('profile');
  });
});

module.exports = router;
