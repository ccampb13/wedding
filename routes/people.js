var express = require('express');
var people = express.Router();

/* GET Main People Section. */
people.get('/', function(req, res) {
  res.render('people/index');
});

/* GET Bridesmaids Kim Section. */
people.get('/kim', function(req, res) {
  res.render('people/kim');
});

/* GET Bridesmaids Betsy Section. */
people.get('/betsy', function(req, res) {
  res.render('people/betsy');
});

/* GET Bridesmaids Jenny Section. */
people.get('/jenny', function(req, res) {
  res.render('people/jenny');
});

/* GET Bridesmaids Megann Section. */
people.get('/megann', function(req, res) {
  res.render('people/megann');
});

/* GET Bridesmaids Emily Section. */
people.get('/emily', function(req, res) {
  res.render('people/emily');
});

/* GET Groomsmen Drew Section. */
people.get('/drew', function(req, res) {
  res.render('people/drew');
});

/* GET Groomsmen Travis Section. */
people.get('/travis', function(req, res) {
  res.render('people/travis');
});

/* GET Groomsmen Blake Section. */
people.get('/blake', function(req, res) {
  res.render('people/blake');
});

/* GET Groomsmen Marty Section. */
people.get('/marty', function(req, res) {
  res.render('people/marty');
});

/* GET Groomsmen Drew Section. */
people.get('/sam', function(req, res) {
  res.render('people/sam');
});

module.exports = people;
