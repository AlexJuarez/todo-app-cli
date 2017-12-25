const Vorpal = require('vorpal');
const TodoApp = require('./TodoApp');

class TodoCLI {
  constructor() {
    this.vorpal = Vorpal();
    this.todoApp = new TodoApp();

    this.setupCommands();
  }

  createCommand(command, description, actionFn) {
    const { vorpal } = this;

    vorpal
      .command(command)
      .description(description)
      .action((args, cb) => {
        actionFn(args);
        cb();
      })
  }

  setupCommands() {
    const { vorpal } = this;

    this.createCommand(
      'add <description>',
      'adds a task to our list.',
      ({ description }) => {
        this.todoApp.addTask(description);
        vorpal.log('Your task has been created');
      }
    );

    this.createCommand(
      'tasks',
      'list the current tasks',
      () => {
        this.todoApp.getTasks().forEach((task) => {
          vorpal.log(task.toString());
        });
      }
    );

    this.createCommand(
      'remove <taskId>',
      'removes a task from our list.',
      ({ taskId }) => {
        this.todoApp.removeTask(taskId);
      }
    );

    this.createCommand(
      'update <taskId> <description>',
      'updates a task.',
      ({ taskId, description }) => {
        this.todoApp.updateTask(taskId, description);
      }
    )
  }

  run() {
    this.vorpal
      .delimiter('todo-cli$')
      .show();
  }
}

module.exports = TodoCLI;