const { readFile } = require('fs');

readFile('/tmp/test.md', 'utf8', (error, fileContent) => {
  if (error) throw error;
  console.log(fileContent);
  console.log(typeof fileContent);
});
