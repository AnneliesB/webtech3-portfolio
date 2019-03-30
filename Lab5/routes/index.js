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

// router GET: /api/v1/messages OR /api/v1/messages?user=username
router.get('/api/v1/messages', messageController.get);

// router GET: /api/v1/messages/:id
router.get('/api/v1/messages/:id', messageController.getid);

// router POST: /api/v1/messages
router.post('/api/v1/messages', messageController.post);

// router PUT: /api/v1/messages/:id
router.put('/api/v1/messages/:id', messageController.putid);

// router DELETE: /api/v1/messages/:id
router.delete('/api/v1/messages/:id', messageController.del);

module.exports = router;