// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  }
  
  switch (license) {
    case 'MIT License':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    case 'GNU GPLv3':
      return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
    case 'Apache License 2.0':
      return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    case 'ISC License':
      return '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)';
    default:
      return '';
  }
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return '';
  }
  
  switch (license) {
    case 'MIT License':
      return '[MIT License](https://opensource.org/licenses/MIT)';
    case 'GNU GPLv3':
      return '[GNU GPLv3](https://www.gnu.org/licenses/gpl-3.0)';
    case 'Apache License 2.0':
      return '[Apache License 2.0](https://opensource.org/licenses/Apache-2.0)';
    case 'ISC License':
      return '[ISC License](https://opensource.org/licenses/ISC)';
    default:
      return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// Function to return the license section of the README
function renderLicenseSection(license) {
  if (!license) {
    return '';
  }
  
  return `## License

This project is licensed under the ${license}. Click [here](${renderLicenseLink(license)}) for more details.

${renderLicenseBadge(license)}`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {

const licenseSection = renderLicenseSection(answers.license);

  return `
# ${answers.title}

${licenseSection}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Description
${answers.description}

## Installation
${answers.installation}

## Usage
${answers.usage}

## License
This project is licensed under the ${answers.license}.

## Contributing
${answers.contributing}

## Tests
${answers.tests}

## Questions
For questions, you can contact me through my GitHub profile:
[GitHub - ${answers.username}](https://github.com/${answers.username})

Or you can email me at: ${answers.email}`;
}

module.exports = generateMarkdown;
