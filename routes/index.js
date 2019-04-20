var express = require('express');
var router = express.Router();

var Reviews = require('../controllers/reviews');

router.get('/review/fetch', Reviews.getUserReview);
router.post('/review/add',Reviews.addUserReview);
router.delete('/review/delete/:id',Reviews.deleteUserReview);
router.patch('/review/update/:id', Reviews.updateUserReview);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
