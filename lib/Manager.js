// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

const Employee = require("./Employee")

class Manager extends Employee {
  constructor(name, id, email, officeNumber) { // what Manager will have
    super(name, id, email) // inherited
    this.officeNumber = officeNumber
  }
  getOfficeNumber() {
    return this.officeNumber // added
  }
  getRole() {
    return "Manager" // overriddes
  }
}

module.exports = Manager // exports