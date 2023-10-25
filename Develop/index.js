// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const answers = require('./questions');


// TODO: Create an array of questions for user input
const questions = require('./questions');

// write function in utils.js file

// TODO: Create a function to initialize app
function init() {
    questions();
};

// Function call to initialize app
init();
