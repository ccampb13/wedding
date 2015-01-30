var express = require('express');
var nashville = express.Router();

/* GET Main Nashville Section. */
nashville.get('/', function(req, res) {
  res.render('nashville/index');
});

/* GET Nashville Drinks Section. */
nashville.get('/drinks', function(req, res) {
  res.render('nashville/drinks');
});

/* GET Nashville Fun Section. */
nashville.get('/fun', function(req, res) {
  res.render('nashville/fun');
});

/* GET Nashville Eats Section. */
nashville.get('/eats', function(req, res) {
  res.render('nashville/eats');
});

module.exports = nashville;
