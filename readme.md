# savejsontofile

```
npm i savejsontofile
```

## Usage

```javascript
saveJsonToFile(
  {
    name: 'Karthick',
    occupation: 'Web Developer',
  }, // Json object
  'output.json', // Output path
  false, // Flatten
)
```

### Output file

```javascript
// output.json

{"name":"Karthick","occupation":"Web Developer"}
```

It helps to easily export the logs or complex objects to a file to debug easily. The library also comes with flattening support that helps fix TypeError: Converting circular structure to JSON error.
