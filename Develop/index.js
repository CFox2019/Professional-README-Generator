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
    }
];

function promptUser() {
    return inquirer.prompt(questions)
};

function generateReadMe(answers) {
    return `
    # ${answers.title},
    ## Description
    ${answers.description},
    ## installation
    ${answers.installation},
    ## usage
    ${answers.usage},
    ## contributions
    ${answers.contribution},
    ## tests
    ${answers.tests}
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
