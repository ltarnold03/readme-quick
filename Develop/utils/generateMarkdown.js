// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  # Project Name
  ${data.name}
  
  ## Description
  ${data.description}

  ## Table of Contents
  ${data.tableOfContents}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${data.lincense}

  ## Contribution Instructions
  ${data.contributionInstructions}

  ## Test
  ${data.test}

  ## Questions
  ${data.questions}

  ### Repository Name
  ${data.repositoryName}

  ### Email
  ${data.email}
`;
}

module.exports = generateMarkdown;
