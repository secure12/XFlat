var express = require('express');
var router = express.Router();
var videodata = require('../videodata.json');

/* GET test page. */
router.get('/', function(req, res, next) {
  res.render('test', {
    title: "testing",
    name: "marcus",
    videodata: videodata,
  });
});

module.exports = router;
