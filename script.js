 //var todoList = $("#todoList");
var button = $("#submitBtn");
var todoListForm = $("#todoList-form");

function handleFormSubmit() {
    

  
    // select form element by its `name` attribute and get its value
    var todoItem = $('input[name="todo-input"]').val();
  
  
  
    // print to the page
    todoListForm.append('<li>' + todoItem + '</li>');
  
    // clear the form input element
    $('input[name="todo-input"]').val('');
  }
  
  // Create a submit event listener on the form element
  button.on('submit', handleFormSubmit());
  

setInterval(
    function () {
        $("#currentDay").text(moment().format(" dddd, DDD MMM YYYY"))

    }, 1000)



    if (condition) {
        
    }

    // todoListForm.on("submit", function(event){
    //     event.preventDefault();
       
    //   })

    // todoListForm.on("submit", function(event){
    //     event.preventDefault();
    //     todoList.append(
    //        todoListForm.value )
        
      
    // })

//     $("#submitBtn").on("click", function (event) {
//         todoListForm.innerHTML = "";
//         event.preventDefault();
//         todoListForm.append(

//               todoListForm.val()


// )});

//                   var storedTodo = localStorage.getItem("todoList-form");





//css

   
        