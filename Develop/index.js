const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')



// Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: ' What is your project title?',
        name: 'title',
    },

    {
        type: 'input',
        message: 'Please describe the purpose and functionality of this project.',
        name: 'description',
    },

    {
        type: 'input',
        message: 'How can a user install this application?',
        name: 'install',
    },

    {
        type: 'input',
        message: 'How do you use your app?',
        name: 'usage',
    },

    {
        type: 'input',
        message: 'How can other other developers contribute to this project?',
        name: 'contribute',
    },

    {
        type: 'input',
        message: 'What commands are being using to test this app?',
        name: 'test',
    },

    {
        type: 'checkbox',
        message: 'What license is being used?',
        name: 'license',
        choices: ['MIT License', 'GNU GPLv3 License', 'Apache license 2.0', 'Mozilla Public License 2.0'],
    },

    {
        type: 'input',
        message: 'What is your Github username:',
        name: 'name'
    },

    {
        type: 'input',
        message: 'Please provide a valid E-mail address',
        name: 'email',
    },



];

// Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((responses) => {
        console.log('writing readme now')
        writeToFile('README.md', generateMarkdown({ ...responses }))
    })
};

// Function call to initialize app
init();
