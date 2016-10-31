function TodoItem(id, value){
  var displayId = id +1;
  var template="<li class=\"todo-item\" data-id=\"" + id +"\">" +
          "<label>" + displayId + ".</label>" +
          "<input type=\"text\" class=\"todo-item-input\" value=\"" + value + "\" name=\"todo["+ id + "]\"></input>"
        "</li>";

  this.getDomTemplate = function(){
    return template;
  }
  this.init = function(){
    //var curTemplate = template;
    //console.log(curTemplate.replace("__itemId", id).replace("__value", (value)? value: ""));

    //this.template = this.template.replace("__value", (value)? value: "");
  };

  this.init();
}