'use strict'
import chalk from 'chalk'
import boxen from 'boxen'
import fs from 'fs'
import path from 'path'
// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
}

// Text + chalk definitions
const data = {
  name: chalk.white('           Maxime Pietrucci-Blacher'),
  handle: chalk.white('Sunshio'),
  shorthandle: chalk.white('mpb'),
  work: chalk.white('Student at ESGI and Open Source Enjoyer'),
  twitter: chalk.gray('https://twitter.com/') + chalk.cyan('sunshiotv'),
  npm: chalk.gray('https://npmjs.com/') + chalk.red('sunshiotv'),
  github: chalk.gray('https://github.com/') + chalk.green('pietrucci-blacher'),
  linkedin: chalk.gray('https://linkedin.com/in/') + chalk.blue('maxime-pietrucci'),
  npx: chalk.red('npx') + ' ' + chalk.white('bitandbang'),
  labelWork: chalk.white.bold('    Work:'),
  labelTwitter: chalk.white.bold(' Twitter:'),
  labelnpm: chalk.white.bold('     npm:'),
  labelGitHub: chalk.white.bold('  GitHub:'),
  labelLinkedIn: chalk.white.bold('LinkedIn:'),
  labelWeb: chalk.white.bold('     Web:'),
}

// Actual strings we're going to output
const newline = '\n'
const heading = `${data.name} / ${data.handle} / ${data.shorthandle}`
const working = `${data.labelWork}  ${data.work}`
const twittering = `${data.labelTwitter}  ${data.twitter}`
const npming = `${data.labelnpm}  ${data.npm}`
const githubing = `${data.labelGitHub}  ${data.github}`
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`

// Put all our output together into a single variable so we can use boxen effectively
const output = heading + // data.name + data.handle
               newline + newline + // Add one whole blank line
               working + newline + // data.labelWork + data.work
               twittering + newline + // data.labelTwitter + data.twitter
               npming + newline + // data.labelnpm + data.npm
               githubing + newline + // data.labelGitHub + data.github
               linkedining + newline
fs.writeFileSync(path.join(__dirname, 'bin/output'), chalk.green(boxen(output, options)))
