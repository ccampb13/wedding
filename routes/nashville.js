var express = require('express');
var nashville = express.Router();

/* GET Main Nashville Section. */
nashville.get('/', function(req, res) {
  res.render('nashville/index');
});

/* GET Nashville Where to Drink Section. */
nashville.get('/drink', function(req, res) {
  res.render('nashville/drink');
});

/* GET Nashville What to Do Section. */
nashville.get('/do', function(req, res) {
  res.render('nashville/do');
});

/* GET Nashville Where to Eat Section. */
nashville.get('/eat', function(req, res) {
  res.render('nashville/eat');
});

/* GET Nashville Need to Know Section. */
nashville.get('/know', function(req, res) {
  res.render('nashville/know');
});

module.exports = nashville;
