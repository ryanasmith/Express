var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* GET cool page*/
router.get('/cool', function(req, res, next){
  res.send('Your\'re so cool');
});

module.exports = router;