var todoList = $("#todoList");
var button = $("#submitBtn");
var todoListForm = $("#todoList-form");

setInterval(
    function () {
        $("#currentDay").text(moment().format(" dddd, DDD MMM YYYY"))

    }, 1000)

    todoListForm.on("submit", function(event){
        event.preventDefault();
        $newLi = $("<li>")
        let todoItemText = $("input").val()
        $newLi.text(todoItemText)
        todoListForm.append($newLi)
      })







//css

   
        