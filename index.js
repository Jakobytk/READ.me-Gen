// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'Description',
        message: 'What is the description of your READ.me?',
    },
    {
        type: 'input',
        name: 'Installation',
        message: 'What are the installation instructions?',
    },
    {
        type: 'input',
        name: 'Usage',
        message: 'What is the purpose of this code',
    },
    {
        type: 'input',
        name: 'license',
        message: 'What is your license?',
        choices: [
            'MIT License',
            'GNU GPLv3',
            'Apache License 2.0',
            'ISC License',
            'No License',
        ]
    },
    {
        type: 'input',
        name: 'Contribution',
        message: 'Who helped on the project?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What are the test instructions?',
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your github username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
    },
    
];



// TODO: Create a function to write README file
function writeREADME(fileName, data) {
    fs.writeFile(fileName, data, (err) => 
        err ? console.error(err) : console.log('read.me generated')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        const readMeInfo = generateMarkdown(answers);
        writeREADME('README.md', readMeInfo);
    })
}

// Function call to initialize app
init();
