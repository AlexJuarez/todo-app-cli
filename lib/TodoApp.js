const TodoList = require('./TodoList');
const Task = require('./Task');

class TodoApp {
  constructor() {
    this.todoList = new TodoList();
  }

  addTask(description) {
    const task = new Task(description);

    this.todoList.add(task);

    return task;
  }

  removeTask(taskId) {
    this.todoList.remove(parseInt(taskId));
  }

  getTasks() {
    return this.todoList.toArray();
  }

  updateTask(taskId, description) {
    const updateFn = (task) => {
      task.description = description;
    };

    this.todoList.update(taskId, updateFn);
  }
}

module.exports = TodoApp;
