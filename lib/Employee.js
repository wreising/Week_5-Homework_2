// TODO: Write code to define and export the Employee class

class Employee { // create the overridding class

  constructor(name, id, email) { // to be inherited by all
    this.name = name
    this.id = id
    this.email = email
  }
  getName() {
    return this.name // functions for the various qualities
  }
  getId() {
    return this.id
  }
  getEmail() {
    return this.email
  }
  getRole() {
    return 'Employee'
  }
}

module.exports = Employee // exports