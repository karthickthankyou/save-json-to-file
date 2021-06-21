#!/usr/bin / env node
const chalk = require('chalk')
const fs = require('fs')

// const [inputObject] = process.argv.slice(2)
// const [exportPath] = process.argv.slice(3)

console.clear()

module.exports.saveJsonToFile = function (inputObject, exportPath) {
  var jsonContent = JSON.stringify(inputObject)

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
        ` JSON file has been saved in ${exportPath} `,
      ),
    )
  })
}
