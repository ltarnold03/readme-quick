// TODO: Include packages needed for this application
// const fs = require('fs');
// const generateMarkdown.js = require('generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the name of your project?'
    },
    {
        type: 'input',
        name: 'Desription',
        message: 'Please provide a desciption of your project?'
    },
    {
        type: 'checkbox',
        name: 'Table of Contents',
        message: 'Please select the Talbe of Contents Item you would like to list of your project.'
    },
    {
        type: 'input',
        name: 'Installation',
        message: 'Please provide installation instructions of your project?'
    },
    {
        type: 'input',
        name: 'Usage',
        message: 'Please provide instructions for use of your project. Please provide screenshot(s) using a relative filepath to your projects assets/images folder.'
    },
    {
        type: 'list',
        name: 'License',
        message: 'Which of the following license applies to your project:',
        choices: [        ]
    },
    {
        type: 'input',
        name: 'Contribution instructions',
        message: 'Please provide instructions on how to contribute to your project.'
    },
    {
        type: 'input',
        name: 'Test',
        message: 'Please provide test instructions for your project?'
    },
    {
        type: 'input',
        name: 'Questions',
        message: 'What is your GitHub username?',
        message: 'What is the name of your repository?',
        message: 'For additional questions, please provide your email?'
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();