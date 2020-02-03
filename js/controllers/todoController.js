const todoController = (function () {
  function createTodo(todoValue) {
    todoModel.push({
      value: todoValue
    });
  }

  function getAllTodos () {
    return todoModel
  }

  return {
    createTodo: createTodo,
    getAllTodos: getAllTodos
  }
})();