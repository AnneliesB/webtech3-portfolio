const fs = require('fs');
const url = require('url');


module.exports = {
  requestListener: (req, res) => {
    var q = url.parse(req.url, true);
    var filename = "Lab_NodeJS_basics" + q.pathname;
    if(filename == "Lab_NodeJS_basics/"){
        filename = "Lab_NodeJS_basics/index.html"
    }
    fs.readFile(filename, function(err, data) {
      if (err) {
        res.writeHead(404, {'Content-Type': 'text/html'});
        return res.end("404 Not Found");
      }  
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      return res.end();
    });
}
}
