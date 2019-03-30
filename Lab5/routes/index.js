var express = require('express');
var router = express.Router();

let messageController = require('../controllers/message');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Home'
  });
});

router.get('/index.pug', function (req, res, next) {
  res.render('index', {
    title: 'Home'
  });
});

router.get('/features.pug', function (req, res, next) {
  res.render('features', {
    title: 'features'
  });
});

router.get('/messages', messageController.get);

module.exports = router;