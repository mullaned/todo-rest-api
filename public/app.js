$(document).ready(function(){
    $.getJSON("/api/todos")
    .then(addTodos)
    .catch((err) => {
        console.log(err)
    })

    $('#todoInput').keypress(function(event){
        if(event.which == 13) {
            createTodo();
        }
    })

    $('.list').on('click', 'li', function(){
        updateTodo($(this));
      })
      
    $('.list').on('click', 'span', function(e){
        e.stopPropagation();
        removeTodo($(this).parent());
    })
})





function addTodos(todos){
    todos.forEach((todo) => {
        addTodo(todo);
    })
}

function addTodo(todo){
    let newTodo = $('<li class="task">' + todo.name + ' <span>X</span></li>');
    //store the id and completed value
    newTodo.data('id', todo._id);
    newTodo.data('completed', todo.completed);
    if(todo.completed){
        newTodo.addClass("done");
    }
    $('.list').append(newTodo);
}

function createTodo(){
    let userInput = $('#todoInput').val();
    //send request to create to do
    $.post('/api/todos', {name: userInput})
    .then(function(newTodo){
        addTodo(newTodo);
        $('#todoInput').val('');
    })
    .catch(function(err){
        console.log(err);
    })
}

function removeTodo(todo){
    let clickedId = todo.data('id');
    let deleteUrl = 'api/todos/'+clickedId;
    $.ajax({
        method: 'DELETE',
        url: deleteUrl
    })
    .then((data)=> {
        todo.remove();
    })
    .catch((err)=> {
        console.log(err);
    })
}

function updateTodo(todo){
    var updateUrl = '/api/todos/' + todo.data('id');
    var isDone = !todo.data('completed');
    var updateData = {completed: isDone}
    $.ajax({
      method: 'PUT',
      url: updateUrl,
      data: updateData
    })
    .then(function(updatedTodo){
      todo.toggleClass("done");
      todo.data('completed', isDone);
    })
  }