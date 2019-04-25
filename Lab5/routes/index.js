var express = require('express');
var router = express.Router();
var cors = require('cors')

let messageController = require('../controllers/message');

/* GET home page. */
router.get('/', cors(), function (req, res, next) {
  res.render('index', {
    title: 'Home'
  });
});

router.get('/index.pug', cors(), function (req, res, next) {
  res.render('index', {
    title: 'Home'
  });
});

router.get('/features.pug', cors(), function (req, res, next) {
  res.render('features', {
    title: 'features'
  });
});

// router GET: /api/v1/messages OR /api/v1/messages?user=username
router.get('/api/v1/messages', cors(), messageController.get);

// router GET: /api/v1/messages/:id
router.get('/api/v1/messages/:id', cors(), messageController.getid);

// router POST: /api/v1/messages
router.post('/api/v1/messages', cors(), messageController.post);

// router PUT: /api/v1/messages/:id
router.put('/api/v1/messages/:id', cors(), messageController.putid);

// router DELETE: /api/v1/messages/:id
router.delete('/api/v1/messages/:id', cors(), messageController.del);

module.exports = router;