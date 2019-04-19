var mongoose = require('mongoose');

var userReviewSchema = mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    date:{type:Date},
    sku:{type:String},
    rating:{type:Number},
    title:{type:String},
    author:{type:String},
    text:{type:String},
    source:{type:String},
});

var userReviews = mongoose.model('userReviews', userReviewSchema);

module.exports = {
    UserReviews:userReviews
}