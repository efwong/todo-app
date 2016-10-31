$(function(){

  // 0 -> activate Home, 1-> activate todo
  function setActiveTab(tab){
    switch(tab){
      case 0:
        $('#home-tab').addClass('active');
        $('#todo-tab').removeClass('active');
        break;
      case 1:
        $('#home-tab').removeClass('active');
        $('#todo-tab').addClass('active');
        break;
      default:
    }
  }

  function parseUrlLocationAndSetTabs(){
    var url= window.location.href;
    var last = url.length -1;
    if(url[last] == '/'){
      url = url.substring(0, last); // remove / at end of url
    }

    var arr = url.split('/');
    if(arr[arr.length-1] == 'todo'){
      // set todo active
      setActiveTab(1);
    }else{
      // set home active
      setActiveTab(0);
    }
  }

  function updateNavBar(isLoggedIn){
    if(isLoggedIn){
      $('#navbar').addClass('logged-in');
    }else{
      $('#navbar').removeClass('logged-in');
    }
    parseUrlLocationAndSetTabs();
  }

  $.get("/user",function(data){
    if(data && data.success){
      updateNavBar(true);
    }else{
      updateNavBar(false);
    }
  }).fail(function(){
      updateNavBar(false);
  });
});