/* const http = require('http');
let {requestListener} = require('./callbackFile');


const server = http.createServer(requestListener);

server.listen(PORT); */
var http = require('http');
var url = require('url');
var fs = require('fs');

const PORT = process.env.PORT || 4001;

http.createServer((req, res) => {
  var q = url.parse(req.url, true);
  var filename = "." + q.pathname;
  fs.readFile(filename, function(err, data) {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 Not Found");
    }  
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(PORT);