// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

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
    type: 'editor',
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
    choices: ['Apache', 'BSD 3', 'BSD 2', 'GPLv3', 'GPLv2', 'AGPLv3', 'ISC', 'MIT', 'Unlicense'],
    loop: false,
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
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log(`Saved to ${fileName}`);
    }
  });
}

// TODO: Create a function to initialize app
async function init() {
  if (process.argv.length < 3) {
    console.log('Usage: node index.js <filename>');
    process.exit();
  }
  const response = await inquirer.prompt(questions);
  writeToFile(process.argv[2], generateMarkdown(response));
}

// Function call to initialize app
init();
