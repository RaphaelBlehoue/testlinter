import '@babel/polyfill';
import http from 'http';

function requestHandler(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end("Hello Raphael ! merci d'apprendre node JS");
}
const server = http.createServer(requestHandler);
server.listen(3031);
