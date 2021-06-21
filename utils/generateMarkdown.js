// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(licenseBadge) {
  if (!licenseBadge) {
    return '';
  }
  return `
  ![badge](https://img.shields.io/badge/license-${licenseBadge}-brightgreen)
<br />`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(licenseLink) {
  if (!licenseLink) {
    return '';
  }
  return `
  ${licenseLink} `
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return '';
  }

  return `
  ${renderLicenseBadge(licenseBadge)}
  ${renderLicenseLink(licenseLink)}
  `
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.projectTitle} 

  ## ${data.gitHubRepo} 
  
  ## Table of Content
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

  ## Installation
  ${data.projectInstall}

  ## Contibutors
  With ❤️ by ${data.contributors}

  ## Description
  ${data.description}

  ## Licence
  This application is covered by the following license:
   ${renderLicenseBadge(data.badges)} 
   ${renderLicenseLink(data.license.url)} 

  <br/>Email ${data.email} with any support questions at <a href="mailto:${data.accountEmail}">${data.accountEmail}</a><br>
  or visit my <a href="https://github.com/${data.gitHubName}">GitHub Homepage</a>.
`;

}

module.exports = generateMarkdown;
