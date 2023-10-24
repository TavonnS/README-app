const fs = require('fs');
const markdownContent = require('./questions');

// TODO: Create a function to write README file
// function writeToFile(productREADME, markdownContent) {
    function writeToFile(markdownContent) {
        fs.writeFile('../build/productREADME.md', markdownContent, err => {
            if (err) {
                console.error('Error writing file', err)
            } else {
                console.log('README created at productREADME.md')
            }
        });
        }

module.exports = writeToFile;