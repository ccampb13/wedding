var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Boyer-Campbell Wedding' });
});

module.exports = router;
