const http = require('http');

const todos = [
  { id: 1, text: 'Todo 1' },
  { id: 2, text: 'Todo 2' },
  { id: 3, text: 'Todo 3' }
];

const server = http.createServer((req, res) => {
  res.writeHead(400, {
    'Content-Type': 'application/json',
    'X-Powered-By': 'Node.js'
  });

  res.write('<h1>Hello</h1>');
  res.end(
    JSON.stringify({ success: false, data: null, error: 'data not found' })
  );
});

const PORT = 7070;

server.listen(PORT, () =>
  console.log(`Listening on port http://localhost:${PORT}`)
);
