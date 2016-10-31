/*
* Add User related routes here
*/

var express = require('express');
var stormpath = require('express-stormpath');
var SimpleUser = require('../models/simple-user')
var router = express.Router();
var path = require('path');


/*
* Fetch User object
*/
router.get('/', stormpath.getUser, function(req, res){
  if(req.user){
    res.send({success: true, user: new SimpleUser(req.user.username, req.user.customData)});
  }else{
    res.send({success: false});
  }
});


module.exports = router;