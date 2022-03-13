// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.

const Employee = require("./Employee")

class Intern extends Employee {
  constructor(name, id, email, school) { // items that the Intern will have
    super(name, id, email) // inherited from Employee
    this.school = school
  }
  getSchool() {
    return this.school // new function
  }
  getRole() {
    return "Intern" // overriddes Employee
  }
}

module.exports = Intern // esport