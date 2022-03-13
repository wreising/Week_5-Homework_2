// TODO: Write code to define and export the Employee class

class employee {

  constructor(name, id, email, role) {
    this.name = name
    this.id = id
    this.email = email
    this.role = role
  }

  getName() {
    return this.name
  }

  getId() {
    return this.id
  }

  getEmail() {
    return this.email
  }

  getRole() {
    return this.role
  }

}

module.exports = employee

// const employee = {
//   name:
//   id:
//   email:
// }


// function Animal (name, species, age, food) {
//   this.name = name
//   this.species = species
//   this.age = age
//   this.food = food
//   this.isSleeping = true
//   this.printInfo = function () {
//     console.log(`Hi! My name is ${this.name}! I am a ${this.species} and I am ${this.age} years old! I like to eat ${this.food}!`)
//   }
// }

// const animal1 = new Animal('Beef', 'Dog', 2, 'Kibble')
// const animal2 = new Animal('Maddie', 'Dog', 4, 'Veggies')
// const animal3 = new Animal('Rex', 'Turtle', 3, 'Crickets')

// const person = {
//   name: 'John Doe',
//   age: 40,
//   email: 'johndoe@gmail.com',
//   child: {
//     name: 'Jack Doe',
//     age: 18,
//     email: 'jackdoe@gmail.com'
//   }
// }

// const personName = person.name
// const age = person.age
// const email = person.email

// const { name: personName, email, age } = person
// const { name } = person
// console.log(name)

// console.log(personName, age, email)

// const { child: { email: childEmail } } = person

// console.log(childEmail)

// const names = ['John Doe', 'Jane Doe', 'Jack Doe', 'Jenny Doe']

// const name1 = names[0]
// const name2 = names[1]
// const name3 = names[2]
// const name4 = names[3]