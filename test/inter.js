const Employee = require(`./Employee`);

class Intern extends Employee {
  constructor(id, email, school) {
    super(id, "Intern", email, school);
    this.school = school;
  }
}
module.exports = Intern;
