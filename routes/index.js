var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('pages/index',
      {
        title: 'Boyer-Campbell Wedding',
        keywords: 'Wedding, Ceremony, Nashville, Houston Station, East End United Methodist Church, Summer Weddings',
        description: 'EJ Boyer & Chad Campbell are to be married August 8th in Nashville, TN. The ceremony will be held at East End United Methodist Church with the reception to immediately follow at Houston Station.',
        author: 'Chad Campbell, EJ Boyer, Peak Nine Designs.',
        bodyClass: 'index'
      }
    );
});

module.exports = router;
