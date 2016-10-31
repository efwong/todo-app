'use strict';

/*
* Add Todo List related routes here
*/
var bodyParser = require('body-parser');
var express = require('express');
var stormpath = require('express-stormpath');
var router = express.Router();
var path = require('path');

/*
* Get Todo page
*/
router.get('/', stormpath.loginRequired, function(req, res) {
  res.render('todo');
});

/*
* Post User Todo Data
* input:
*       todo: [string]
*/
router.post('/', bodyParser.urlencoded({extended: false}), stormpath.loginRequired, function(req, res) {
  console.log('posting');
  var todoArr = [];
  for(var key in req.body){
    var word = req.body[key];
    if(word){
     todoArr.push(req.body[key]);
    }
  }
  req.user.customData['todo'] = todoArr;

  // update custom data's todo list
  req.user.customData.save(function(err){
    if(err){
      res.status(400).end(err.userMessage);
    }else{
      res.redirect('/todo');
    }
  });
});

module.exports = router;