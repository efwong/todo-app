/*
* Handle routing to each of the areas (Home, Todo, User)
*/
'use strict';

var bodyParser = require('body-parser');
var express = require('express');
var stormpath = require('express-stormpath');
var router = express.Router();
var path = require('path');
var userRoute = require('./routes/user');
var homeRoute = require('./routes/home');
var todoRoute = require('./routes/todo');


// route to home
router.use('/', homeRoute);

// route to user
router.use('/user', userRoute);

// route to todo
router.use('/todo', todoRoute);
module.exports = router;
