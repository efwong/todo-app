/*
* Model for User that filters Stormpath's user model for only the username and customData
*/
function SimpleUser(username, customData){
  this.username = username;
  this.customData = customData;
}

module.exports = SimpleUser;