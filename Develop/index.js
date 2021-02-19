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
        message: 'How would you describe this project?'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the instructions for installation?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use the application?'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'What instructions do you have for anyone contributing to this project?'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'How are tests run in this project?'
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'githublink',
        message: 'What is your GitHub profile link?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'What license do you want to use?',
        choices: [
            'None', 'Apache 2.0', 'GNU Public v3.0',  'MIT', 'Boost Software License 1.0',  'Creative Commons Zero v1.0 Universal', 'Eclipse Public License 2.0', 'GNU Affero General Public v3.0', 'GNU General Public v2.0', 'GNU Lesser General Public v2.1', 'Mozilla Public 2.0', 'The Unlicense']
    }
];

function promptUser() {
    return inquirer.prompt(questions)
};

function generateReadMe(answers) {
    return `
![${answers.license}](https://img.shields.io/badge/license-${escape(answers.license)}-brightgreen)

# ${answers.title}

## Table of Contents

* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
* [License](#license)

## Description
${answers.description}

## Installation
${answers.installation}

## Usage
${answers.usage}

## Contributing
${answers.contribution}

## Tests
${answers.tests}

## Questions
GitHub: [${answers.github}](${answers.githublink})

Email me at [${answers.email}](${answers.email}) with additional questions.

## License
This project is covered under the ${answers.license} license.
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
