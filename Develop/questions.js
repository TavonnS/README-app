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

    function renderLicenseBadge(badgeChoice) {
        if (badgeChoice === "MIT") {
          return `![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)`;
        } else if (badgeChoice === 'Microsoft Public License') {
            return `![GitHub license](https://img.shields.io/badge/license-Microsoft%20Public%20License-yellow.svg)`;
        } else if (badgeChoice === "Creative Commons") {
            return `![Static Badge](https://img.shields.io/badge/license-Creative%20Commons-black.svg)`
        } else if (badgeChoice === 'Eclipse Public License') {
            return `![Static Badge](https://img.shields.io/badge/license-Eclipse%20Public%20License-purple.svg)`
        } else if (badgeChoice === 'Academic Free License') {
            return `![GitHub license](https://img.shields.io/badge/license-Academic%20Free%20License-green.svg)`
        } else if (badgeChoice === 'Mozilla Public License') {
            return `![GitHub license](https://img.shields.io/badge/license-Mozilla%20Public%20License-blue.svg)`
        } else
        return "";
      };


    const markdownContent = 
`# ${answers.title}

## Description

${renderLicenseBadge(badgeChoice)}

${answers.description}

## Table of Contents
- [Title](#${answers.title.toLowerCase()})
- [Description](#description)
- [Table of Contents](#table-of-contents)
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
