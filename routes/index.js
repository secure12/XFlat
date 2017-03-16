var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/', function (req, res) {
   fs.readFile( __dirname + "../" + "data.json", 'utf8', function (err, data) {
       console.log( data );
       res.end( data );
   });
})

module.exports = router;
