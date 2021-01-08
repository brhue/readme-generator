// TODO: Include packages needed for this application
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    message: 'What is the project name?',
    name: 'projectName',
  },
  {
    type: 'input',
    message: 'Provide a project description.',
    name: 'projectDescription',
  },
  {
    type: 'input',
    message: 'Please provide installation instructions.',
    name: 'projectInstall',
  },
  {
    type: 'input',
    message: 'Please provide usage information.',
    name: 'projectUsage',
  },
  {
    type: 'input',
    message: 'Please provide contribution guidelines.',
    name: 'projectContrib',
  },
  {
    type: 'input',
    message: 'Please provide testing instructions.',
    name: 'projectTesting',
  },
  {
    type: 'list',
    message: 'Choose a license for your project.',
    name: 'projectLicense',
    choices: ['MIT', 'ISC'],
  },
  {
    type: 'input',
    message: 'What is your github username?',
    name: 'username',
  },
  {
    type: 'input',
    message: 'What is your email address?',
    name: 'email',
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((response) => {
    console.log(response);
  });
}

// Function call to initialize app
init();
