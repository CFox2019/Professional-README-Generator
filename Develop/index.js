// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of the project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Description of the project'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the installation instructions?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How will the project be used? (Include screenshots)'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'List any contributers or any third-party assets that require attribution.'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'If you ran any tests, include examples.'
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'What license do you want to use?',
        choices: ['None', 'Apache License 2.0', 'GNU Public License v3.0', 'MIT License', 'BSD 2-Clause "Simplified" License', 'BSD 3-Clause "New" or "Revised" License', 'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal', 'Eclipse Public License 2.0', 'GNU Affero General Public License v3.0', 'GNU General Public License v2.0', 'GNU Lesser General Public License v2.1', 'Mozilla Public License 2.0', 'The Unlicense']
    }
];

function promptUser() {
    return inquirer.prompt(questions)
};

function generateReadMe(answers) {
    return `
# ${answers.title}

## Description
${answers.description}

## installation
${answers.installation}

## usage
${answers.usage}

## contributions
${answers.contribution}

## tests
${answers.tests}

## License
${answers.license}
`;
}

promptUser()
.then(function(answers) {
    const md = generateReadMe(answers);

    return writeFileAsync('README.md', md);
})
.then(function() {
    console.log('Successfully wrote to README.md!')
})
.catch(function(err) {
    console.error(err);
})

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
