// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(licenseBadge) {
  if (!licenseBadge) {
    return '';
  }
  return `
  ![badge](https://img.shields.io/badge/license-${data.badges}-brightgreen)
<br />`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(licenseLink) {
  if (!licenseLink) {
    return '';
  }
  return `
  ${data.license.url} `
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

  ## Installation
  ${data.projectInstall}

  ## Contibutors
  With ❤️ by ${data.contributors}

  ## Description
  ${data.description}

  ## Licence
  This application is covered by the following license:
  ${renderLicenseSection(license)}
`;
}

module.exports = generateMarkdown;
