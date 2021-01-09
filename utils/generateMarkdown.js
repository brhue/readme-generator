// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    case 'ISC':
      return '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)';
    default:
      return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'MIT':
      return '[MIT](https://opensource.org/licenses/MIT)';
    case 'ISC':
      return '[ISC](https://opensource.org/licenses/ISC)';
    default:
      return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectName}
${renderLicenseBadge(data.projectLicense)}
## Description
${data.projectDescription}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation
\`\`\`
${data.projectInstall.trim()}
\`\`\`

## Usage
\`\`\`
${data.projectUsage}
\`\`\`

## License
${renderLicenseLink(data.projectLicense)}

## Contributing
${data.projectContrib}

## Tests
\`\`\`
${data.projectTesting}
\`\`\`

## Questions
If you have any questions you can reach out to me on [Github](https://github.com/${data.username}) or shoot me an [email](mailto:${data.email}).
`;
}

module.exports = generateMarkdown;
