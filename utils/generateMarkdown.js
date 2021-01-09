// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'Apache':
      return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    case 'BSD 3':
      return '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
    case 'BSD 2':
      return '[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)';
    case 'GPLv3':
      return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
    case 'GPLv2':
      return '[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)';
    case 'AGPLv3':
      return '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)';
    case 'ISC':
      return '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)';
    case 'MIT':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    case 'Unlicense':
      return '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](https://unlicense.org/)';
    default:
      return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'Apache':
      return '[Apache](https://opensource.org/licenses/Apache-2.0)';
    case 'BSD 3':
      return '[BSD 3](https://opensource.org/licenses/BSD-3-Clause)';
    case 'BSD 2':
      return '[BSD 2](https://opensource.org/licenses/BSD-2-Clause)';
    case 'GPLv3':
      return '[GPLv3](https://www.gnu.org/licenses/gpl-3.0)';
    case 'GPLv2':
      return '[GPLv2](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)';
    case 'AGPLv3':
      return '[AGPLv3](https://www.gnu.org/licenses/agpl-3.0)';
    case 'ISC':
      return '[ISC](https://opensource.org/licenses/ISC)';
    case 'MIT':
      return '[MIT](https://opensource.org/licenses/MIT)';
    case 'Unlicense':
      return '[Unlicense](https://unlicense.org/)';
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
