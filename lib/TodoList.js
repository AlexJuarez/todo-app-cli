class TodoList {
  constructor() {
    this.tasks = [];
  }

  add(task) {
    this.tasks.push(task);
  }

  getIndex(taskId) {
    return this.tasks.findIndex((task) => task.id === taskId);
  }

  get(taskId) {
    return this.tasks[this.getIndex(taskId)];
  }

  remove(taskId) {
    this.tasks.splice(this.getIndex(taskId), 1);
  }

  update(taskId, updateFn) {
    updateFn(this.get(taskId));
  }

  toArray() {
    return this.tasks;
  }
}

module.exports = TodoList;
