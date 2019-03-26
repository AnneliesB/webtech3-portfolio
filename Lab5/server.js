const express        = require('express');
const MongoClient    = require('mongodb').MongoClient;
const bodyParser     = require('body-parser');
const app            = express();

const port = 4001;

app.use(bodyParser.urlencoded({ extended: true }));

require('./app/routes')(app, {});
app.listen(process.env.port, '0.0.0.0', () => {
  console.log('We are live on ' + port);
});