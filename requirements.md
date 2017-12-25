# Requirements

- There is one user.
- The user can add tasks
- A task has a status, and a description
- The user can list tasks by status
- The user will need a way to mark completed tasks
- The tasks are only valid while the app is running.
- There is an easy to exit the application.
- The user will want to be able to edit the description of existing tasks (stretch goal)
- The CLI is easy to use

# Sub-systems

- Application Core
  - User Interface Logic
    - GUI (i/o)
    - Commands
      - help - lists commands and their inputs
      - tasks - lists tasks
      - add task "description"
      - remove task id
      - set task field newValue
      - count tasks - the number of tasks
  - Abstract Data Types
    - Task
      - id
      - description
      - status
