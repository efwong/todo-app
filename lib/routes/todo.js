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

router.post('/', bodyParser.urlencoded({extended: false}), stormpath.loginRequired, function(req, res) {
  console.log('posting');
  var todoArr = [];
  for(var key in req.body){
     todoArr.push(req.body[key]);
  }
  req.user.customData['todo'] = todoArr;
  //res.render('profile');
  //res.sendFile(path.join(__approot, 'lib/views/todo/todo.html'));

  req.user.customData.save(function(err){
    if(err){
      res.status(400).end(err.userMessage);
    }else{
      res.redirect('/todo');
    }
  });
});

module.exports = router;