const { createServer } = require('http');
const { readFile } = require('fs');

const PORT = 8080;

// Read on file

readFile('/tmp/test.md', 'utf8', (error, fileContent) => {
  if (error) throw error;
  console.log(fileContent);
  console.log(typeof fileContent);
});

//Create HTTP server

const app = createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write(`
  <html>
    <body>
      <h2 style="color:blue">Hello node.js</h2>
    </body>
  </html>
  
  `);

  console.log(`App listen on ${PORT}`);
  res.end();
});

app.listen(PORT);
