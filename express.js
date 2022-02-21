const express = require('express');
const http = require('http');

const app = express()
const httpPort = 4400;

app.use(express.static(__dirname + '/checkout'));

var httpServer = http.createServer(app);

httpServer.listen(httpPort, () => {
  console.log("Http server listing on port : " + httpPort)
});
