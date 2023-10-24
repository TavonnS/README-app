// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const answers = require('./questions');


// TODO: Create an array of questions for user input
const questions = require('./questions');

/*
// TODO: Create a function to write README file
// function writeToFile(productREADME, markdownContent) {
function writeToFile() {
fs.writeFile('../build/productREADME.md', markdownContent, err => {
    if (err) {
        console.error('Error writing file', err)
    } else {
        console.log('README created at productREADME.md')
    }
});
}
*/
// TODO: Create a function to initialize app
function init() {
    questions();

    //writeToFile();
}

// Function call to initialize app
init();
