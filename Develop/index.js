// TODO: Include packages needed for this application
const fs = ('fs');
const inquirer = ('inquirer');
const utils = ('utils');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: '# title of project'
    },
    {
        type: 'input',
        name: 'description',
        message: '## Description'
    },
    {
        type: 'input',
        name: 'installation',
        message: '## Installation Instructions'
    },
    {
        type: 'input',
        name: 'usage',
        message: '## Usage'
    },
    {
        type: 'input',
        name: 'contribution',
        message: '## Contributing'
    },
    {
        type: 'input',
        name: 'tests',
        message: '## Tests'
    }
];



// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
