var express = require('express');
var router = express.Router();

var Reviews = require('../controllers/reviews');

router.get('/review/fetch', Reviews.getUserReview);
router.post('/review/add',Reviews.addUserReview);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
