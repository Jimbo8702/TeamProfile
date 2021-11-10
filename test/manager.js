const Employee = require(`./Employee`);

class Managers extends Employee {
  constructor(id, email, office) {
    super(id, "Manager", email, office);
    this.office = office;
  }
}
module.exports = Managers;
