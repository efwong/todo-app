/*
* General Service method
* API calls should go here
*/
var Service = (function(){

  var userCallBack = null;
  function getUser(){
    userCallBack = $.get("/user");
    return userCallBack;
  }

  return{
    getUser: function(){
      // Prevent multiple calls for user object
      // Can just lookup the data from the user callback
      if(userCallBack == null){
        return getUser();
      }else{
        return userCallBack;
      }
    }
  };
})();