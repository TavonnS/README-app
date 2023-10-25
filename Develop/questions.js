const inquirer = require('inquirer');
const writeToFile = require('./utils');

const questions =  () => {

inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your application?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter the description of your application...'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter the instructions for installing your applicaiton...'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter the usage information of your application...'
    },
    {
        type: 'input',
        name: 'contribute',
        messsage: 'What are the guidelines for contributing to this application? Describe here...'
    },
    {
        type: 'input',
        name: 'test',
        message: 'What information is needed for testing this application? Describe here...'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your application from this list:',
        choices: ['MIT', 'Microsoft Public License', 'Mozilla Public License', 'Eclipse Public License', 'Academic Free License', 'Creative Commons']
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'email', 
        message: 'What is your email?'
    }
]
)
.then(answers => {
    const badgeChoice = answers.license;

    const markdownContent = 
`# ${answers.title}

## Description

${answers.description}

## Table of Contents
- [Title]
- [Description]
- [Table of Contents]
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation  

${answers.installation}

## Usage  

${answers.usage}

## License  

${answers.license}

## Contributing  

${answers.contribute}

## Tests  

${answers.test}

## Questions  

My GitHub username is ${answers.username}, and my profile is [HERE](https://www.github.com/${answers.username}).
You may email me with additional questions here: <${answers.email}>`
    
    
    module.exports = markdownContent;
    writeToFile(markdownContent);

    
} 
);
};

module.exports = questions;
