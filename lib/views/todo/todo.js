/*
* Run Todo page logic
*/
$(function(){

  var currentTodoListCount = 0; // keep track of the current # of todo items

  // given a list of strings (todoList)
  // generate todo list items and append it to the DOM
  function parseTodoList(todoList){
    if(todoList && todoList.length > 0){
      for(var i = 0; i < todoList.length; i++){
        var itemWord = todoList[i];
        addNewTodoListItem(i, itemWord); 
      }
      currentTodoListCount = todoList.length;
    }else{
      addNewTodoListItem(0, "");
      currentTodoListCount = 1;
    }
  }

  // Ad new todo list item
  function addNewTodoListItem(id, value){
    var newTodoItem = new TodoItem(id, value);
    $('#todo-list').append(newTodoItem.getDomTemplate());
  }

  // get todo list and parse it to the UI
  function fetchTodoList(){
    Service.getUser().done(function(data){
      if(data && data.success){
        parseTodoList(data.user.customData.todo);
      }else{
        // error can't fetch
        alert('Unable to fetch user data.');
      }
    }).fail(function(){
      console.log('failed');
    });
  }

  // onclick: Add a new todo item
  $('#add-todo-item-btn').on('click', function(){
    addNewTodoListItem(currentTodoListCount, "");
    currentTodoListCount++;
  });

  // onclick: Save current todo item list to user custom data
  $('#save-todo-btn').on('click', function(){
    var listOfStrings = $('#todo-list .todo-item .todo-item-input').map(function(i, obj){ 
      return obj.value
    });

  });

  fetchTodoList();
});