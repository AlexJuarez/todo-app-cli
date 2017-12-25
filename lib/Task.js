let id = 0;

const nextID = () => id++;

class Task {
  constructor(description) {
    this.id = nextID();
    this.createdOn = new Date();
    this.description = description;
  }

  toString() {
    return `Task #${this.id} -` +
      ` ${this.createdOn.toDateString()}` +
      ` | ${this.description}`;
  }
}

module.exports = Task;
