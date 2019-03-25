const http = require('http');
let {requestListener} = require('./callbackFile');
const PORT = process.env.PORT || 4001;

const server = http.createServer(requestListener);

server.listen(PORT);