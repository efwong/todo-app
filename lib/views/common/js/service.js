var Service = (function(){

  var userCallBack = null;
  function getUser(){
    userCallBack = $.get("/user");
    return userCallBack;
  }

  // function saveTodoList(listOfStrings){
  //   $.post("/todo")
  // }

  return{
    getUser: function(){
      // Prevent multiple calls for user
      // can just lookup the data from the user callback
      if(userCallBack == null){
        return getUser();
      }else{
        return userCallBack;
      }
    }
  };
})();