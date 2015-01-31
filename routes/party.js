var express = require('express');
var party = express.Router();

/* GET Main Party Section. */
party.get('/', function(req, res) {
  res.render('party/index');
});

/* GET Paty Welcome Drinks Section. */
party.get('/welcome', function(req, res) {
  res.render('party/welcome');
});

/* GET Wedding Ceremony Section. */
party.get('/ceremony', function(req, res) {
  res.render('party/ceremony');
});

/* GET Wedding Reception Section. */
party.get('/reception', function(req, res) {
  res.render('party/reception');
});

module.exports = party;
