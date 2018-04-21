var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render(path.join(__dirname, '../views/index.html'), { title: 'Express' });
});
router.get('/users', function(req, res, next) {
  res.render(path.join(__dirname, '../views/user.html'), { title: 'Express' });
});

module.exports = router;
