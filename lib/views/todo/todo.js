$(function(){

  var currentTodoListCount = 0;

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

  function fetchTodoList(){
    Service.getUser().done(function(data){
      if(data && data.success){
        parseTodoList(data.user.customData.todo);
      }else{
      }
    }).fail(function(){
      console.log('failed');
    });
  }

  $('#add-todo-item-btn').on('click', function(){
    addNewTodoListItem(currentTodoListCount, "");
    currentTodoListCount++;
  });

  $('#save-todo-btn').on('click', function(){
    var listOfStrings = $('#todo-list .todo-item .todo-item-input').map(function(i, obj){ 
      return obj.value
    });

  });

  fetchTodoList();
});