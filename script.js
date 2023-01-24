 var todoList = $("#todoList");
var button = $("#submitBtn");
var todoListForm = $("#todoList-form");


function printTodoData(name) {
  var projectRowEl = $('<tr>');

  var projectNameTdEl = $('<td>').addClass('p-2').text(name); 

  projectRowEl.append(
    projectNameTdEl );


  }

  function handleProjectFormSubmit(event) {
    event.preventDefault();
  var projectName = projectNameInputEl.val().trim();
  printTodoData(projectName); }


  todoListForm.on('submit', handleProjectFormSubmit);



setInterval(
    function () {
        $("#currentDay").text(moment().format(" dddd, DDD MMM YYYY"))

    }, 1000)

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

   
        