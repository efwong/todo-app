$(function(){

  // change user name next to welcome sign
  function updateUserName(name){
    $('#user-name').text(name);
  }

  Service.getUser().done(function(data){
    if(data && data.success){
      updateUserName(data.user.username);
    }
  })
});