const { saveJsonToFile } = require('./index')

saveJsonToFile(
  // Json object
  {
    name: 'Karthick',
    occupation: 'Software Developer',
  },
  // File path
  'output2.json',
  //Flatten
  false,
)

saveJsonToFile(
  {
    name: 'Karthick',
    occupation: 'Software Developer',
  },
  'output.json',
  true,
)
