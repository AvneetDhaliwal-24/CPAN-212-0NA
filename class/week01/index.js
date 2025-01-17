const http = require("http"); //needed to connect to the server

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
      data: 'Hello World!',
    }));
  }); //creating a network module

server.listen(3000); //port number is needed