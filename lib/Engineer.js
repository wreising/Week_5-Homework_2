// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

const employee = require("./Employee.js")

// how does class engineer add onto employee?

class engineer {

  constructor(name, id, email, github, role) { // still name, id, email?
    this.name = name
    this.id = id
    this.email = email
    this.github = github
    this.role = role
  }

  getGithub() {
    return this.github
  }

} s