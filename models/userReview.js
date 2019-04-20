var mongoose = require('mongoose');

var userReviewSchema = mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    date:{
        type:String,
        default: (new Date()).toISOString(),
    },
    sku:{type:String},
    rating:{
        type:Number,
        min: 0,
        max: 5
    },
    title:{type:String},
    author:{type:String},
    text:{type:String},
    source:{type:String},
});

var userReviews = mongoose.model('userReviews', userReviewSchema);

module.exports = {
    UserReviews:userReviews
}


/* For Practice Purpose Only... Do not uncomment!!
var e = new Date();
var str = `${e.getUTCFullYear()}-${e.getUTCMonth()}-${e.getUTCDate()}T${e.getUTCHours()}:${e.getUTCMinutes()}:${e.getUTCSeconds()}.${e.getUTCMilliseconds()}+${-Math.ceil(e.getTimezoneOffset()/60)}:${-e.getTimezoneOffset()%60}`;
var str2 = e.toISOString();
*/
