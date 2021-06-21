const { saveJsonToFile } = require('./index')

saveJsonToFile(
  { name: 'Karthick', occupation: 'Software Developer', hobbies: 'Writing' },
  'output2.json',
)

saveJsonToFile(
  { name: 'Karthick', occupation: 'Software Developer', hobbies: 'Writing' },
  'output.json',
  true,
)
