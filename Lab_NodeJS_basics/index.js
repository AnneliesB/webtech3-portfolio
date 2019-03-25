const http = require('http');
let {requestListener} = require('Lab_NodeJS_basics/callbackFile.js');
const PORT = process.env.PORT || 4001;

const server = http.createServer(requestListener);

server.listen(PORT);