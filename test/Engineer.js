const Employee = require(`./Employee`);

class Engineer extends Employee {
  constructor(id, email, github) {
    super(id, "Engineer", email, github);
    this.github = github;
  }
}

module.exports = Engineer;
