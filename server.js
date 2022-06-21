const http = require('http');

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end('Node JS!');
}

const server = http.createServer(requestListener);
server.listen(8080);