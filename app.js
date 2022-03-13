const Employee = require('./lib/Employee')
const Manager = require("./lib/Manager")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")
const inquirer = require("inquirer")
const path = require("path") // ?
const fs = require("fs")

const OUTPUT_DIR = path.resolve(__dirname, "output") // ?
const outputPath = path.join(OUTPUT_DIR, "team.html") // ?

const render = require("./lib/htmlRenderer") // how do I send stuff here?

// open array
let teamArray = []

// first function called - from bottom
function startTeam() {
  console.log('\nWelcome to Bootcamp Inc. To build your team, please answer the following questions:\n')
  inquirer.prompt([
    {
      type: 'input',
      name: 'managerName',
      message: 'What is your name?'
    },
    {
      type: 'input',
      name: 'managerId',
      message: 'What is your ID number?'
    },
    {
      type: 'input',
      name: 'managerEmail',
      message: 'What is your email address?'
    },
    {
      type: 'input',
      name: 'managerOfficeNumber',
      message: 'What is your office number?'
    }
  ])
    .then((managerData) => {
      console.log(managerData)
      let newManager = new Manager(
        managerData.managerName,
        managerData.managerId,
        managerData.managerEmail,
        managerData.managerOfficeNumber
      )
      teamArray.push(newManager) // add manager to teamArray
      console.log(teamArray)
      addTeamMembers() // move onto the main team building function
    })
}

// add employees or interns to the team
function addTeamMembers() {
  inquirer.prompt([
    {
      type: 'list',
      name: 'employeeType',
      message: 'What do you want to add?',
      choices: ['Engineer', 'Intern', 'Finished building my Team'] // add an Engineer, and Intern, or be finished
    }
  ])
    .then((roleSelect) => {
      switch (roleSelect.employeeType) {
        case 'Engineer':
          addEngineer() // go to add engineer
          break
        case 'Intern':
          addIntern() // go to add intern
          break
        case 'Finished building my Team':
          createTeamPage() // go to build the HTML page
      }
    })
}

// Add engineers
function addEngineer() {
  inquirer.prompt([
    {
      type: 'input',
      name: 'engineerName',
      message: 'What is your name?'
    },
    {
      type: 'input',
      name: 'engineerId',
      message: 'What is your ID number?'
    },
    {
      type: 'input',
      name: 'engineerEmail',
      message: 'What is your email address?'
    },
    {
      type: 'input',
      name: 'engineerGithub',
      message: 'What is your GitHub user name?'
    }
  ])
    .then((engineerData) => {
      let newEngineer = new Engineer(
        engineerData.engineerName,
        engineerData.engineerId,
        engineerData.engineerEmail,
        engineerData.engineerGithub
      )
      teamArray.push(newEngineer)
      console.log(engineerData)
      console.log(teamArray)
      addTeamMembers() // go back to add team members
    })
}

// add intern
function addIntern() {
  inquirer.prompt([
    {
      type: 'input',
      name: 'internName',
      message: 'What is your name?'
    },
    {
      type: 'input',
      name: 'internId',
      message: 'What is your ID number?'
    },
    {
      type: 'input',
      name: 'internEmail',
      message: 'What is your email address?'
    },
    {
      type: 'input',
      name: 'internSchool',
      message: 'What school to you attend?'
    }
  ])
    .then((internData) => {
      const intern = new Intern(
        internData.internName,
        internData.internId,
        internData.internEmail,
        internData.internSchool
      )
      teamArray.push(intern)
      console.log(internData)
      console.log(teamArray)
      addTeamMembers() // go back to add team member
    })
}

// send the array to the htmlRenderer.js
function createTeamPage() {
  // should show the complete team array
  console.log(teamArray)
  // send to the rencerer how? - need to watch more of the video
}

startTeam() // kick the whole thing off


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
