// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

const Employee = require("./Employee") // bring Employee in

class Engineer extends Employee { // extends the class brought in from Employee
  constructor(name, id, email, github) { // the ones that Engineer will have
    super(name, id, email) // add these from Employee
    this.github = github
  }
  getGithub() {
    return this.github // added
  }
  getRole() {
    return "Engineer" // override "Employee"
  }
}

module.exports = Engineer // export