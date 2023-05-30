'use strict'

const fs = require('fs')
const path = require('path')

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
}

// Import the required modules dynamically
Promise.all([
  import('chalk'),
  import('boxen')
]).then(([chalk, boxen]) => {
  // Text + chalk definitions
  const data = {
    name: chalk.default.white('      Maxime Pietrucci-Blacher'),
    handle: chalk.default.white('Sunshio'),
    work: chalk.default.white('Student at ESGI and Open Source Enjoyer'),
    twitter: chalk.default.gray('https://twitter.com/') + chalk.default.cyan('sunshiotv'),
    npm: chalk.default.gray('https://npmjs.com/') + chalk.default.red('sunshiotv'),
    github: chalk.default.gray('https://github.com/') + chalk.default.green('pietrucci-blacher'),
    linkedin: chalk.default.gray('https://linkedin.com/in/') + chalk.default.blue('maxime-pietrucci'),
    labelWork: chalk.default.white.bold('    Work:'),
    labelTwitter: chalk.default.white.bold(' Twitter:'),
    labelnpm: chalk.default.white.bold('     Npm:'),
    labelGitHub: chalk.default.white.bold('  GitHub:'),
    labelLinkedIn: chalk.default.white.bold('LinkedIn:')
  }

  // Actual strings we're going to output
  const newline = '\n'
  const heading = `${data.name} / ${data.handle}`
  const working = `${data.labelWork}  ${data.work}`
  const twittering = `${data.labelTwitter}  ${data.twitter}`
  const npming = `${data.labelnpm}  ${data.npm}`
  const githubing = `${data.labelGitHub}  ${data.github}`
  const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`

  // Actual strings we're going to output
  const output = `${heading}${newline}${newline}${working}${newline}${twittering}${newline}${npming}${newline}${githubing}${newline}${linkedining}`

  // Create the output directory if it doesn't exist
  const outputDirectory = path.join(process.cwd(), 'bin')
  const outputFile = path.join(outputDirectory, 'output')
  if (!fs.existsSync(outputDirectory)) {
    fs.mkdirSync(outputDirectory)
  }

  // Write the output to a file using chalk and boxen for formatting
  fs.writeFileSync(outputFile, chalk.default.green(boxen.default(output, options)))
}).catch((error) => {
  console.error('Error occurred:', error)
})
