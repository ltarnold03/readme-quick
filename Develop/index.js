// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the name of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a desciption of your project?'
    },
    {
        type: 'checkbox',
        name: 'tableOfContents',
        message: 'Please select the Talbe of Contents Item you would like to list of your project.',
        choices: ['Description', 'Table of Contents', 'Installation', 'Usage', 'License', 'Contribution Instructions', 'Test', 'Questions']
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide installation instructions of your project?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide instructions for use of your project. If providing a screenshot(s) please use a relative filepath to your projects assets/images folder.'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which of the following license applies to your project:',
        choices: ['a', 'b', 'c'        ]
    },
    {
        type: 'input',
        name: 'contributionInstructions',
        message: 'Please provide instructions on how to contribute to your project.'
    },
    {
        type: 'input',
        name: 'test',
        message: 'Please provide test instructions for your project?'
    },
    {
        type: 'input',
        name: 'questions',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'repositoryName',
        message: 'What is the name of your repository?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'For additional questions, please provide your email?'
    },
];

// TODO: Create a function to write README file
function writeToFile(file, data) {
    return fs.writeFileSync(file, data);
}

// TODO: Create a function to initialize app
function init() {
inquirer
    .prompt(questions)
    .then((data) => {
        writeToFile('readme.md', generateMarkdown(data))
        console.log('Readme.md successful!')
   })
   .catch((err) => {
     console.log(err)
   });
}

// Function call to initialize app
init();
