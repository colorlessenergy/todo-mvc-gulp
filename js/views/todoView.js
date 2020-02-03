(function () {
  const form = document.querySelector('#todoForm');
  
  
  form.addEventListener('submit', function (ev) {
    ev.preventDefault();
    todoController.createTodo(form.todo.value);
    displayTodos();

    form.todo.value = '';
  });
  
  
  
  function displayTodos () {
    let todosContainer = document.querySelector('#todos');
    let todos = todoController.getAllTodos();
    
    todosContainer.innerHTML = '';
    todos.forEach(function (todo) {
      let createP = document.createElement('p');
      createP.textContent = todo.value;
      todosContainer.appendChild(createP);
    });
  }


  displayTodos();
})()