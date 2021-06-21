#!/usr/bin / env node
const chalk = require('chalk')
const fs = require('fs')
const { stringify } = require('flatted')

// const [inputObject] = process.argv.slice(2)
// const [exportPath] = process.argv.slice(3)

console.clear()

module.exports.saveJsonToFile = function (
  inputObject,
  exportPath,
  flatten = false,
) {
  let stringifyFunc = flatten ? stringify : JSON.stringify
  var jsonContent = stringifyFunc(inputObject)

  fs.writeFile(exportPath, jsonContent, 'utf8', function (err) {
    if (err) {
      console.log(
        chalk.bgRed.bold(
          'An error occurred while writing JSON Object to File.',
        ),
      )
      return console.log(err)
    }

    console.log(
      chalk.black.bgBlueBright.bold(
        `${
          flatten ? ' Flattened' : ''
        } JSON file has been saved in ${exportPath} `,
      ),
    )
  })
}
