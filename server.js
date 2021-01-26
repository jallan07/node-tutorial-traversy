const http = require('http');

const todos = [
  { id: 1, text: 'Todo 1' },
  { id: 2, text: 'Todo 2' },
  { id: 3, text: 'Todo 3' }
];

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('X-Powered-By', 'Node.js');
  res.write('<h1>Hello</h1>');
  res.end(JSON.stringify({ success: true, data: todos }));
});

const PORT = 7070;

server.listen(PORT, () =>
  console.log(`Listening on port http://localhost:${PORT}`)
);
