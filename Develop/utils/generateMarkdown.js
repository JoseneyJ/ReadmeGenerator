function renderBadge(license) {
  if (license !== '') {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`
  }
  return '';
}


// Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderBadge(data.license)}
  
  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Testing](#test)
  

  ## Description
  ${data.description}

  ## Insatllation
  ${data.install}

  ## Usage
  ${data.usage}

  ## Contribution
  ${data.contribute}

  ## Testing
  ${data.test}

  ## Contact Information 
  - Github: [${data.github}](https://github.com/${data.github})
  - Email: [${data.email}](mailto:user@example.com)


`;

}


module.exports = generateMarkdown;
