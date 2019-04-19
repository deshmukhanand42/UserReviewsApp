'use strict';

var mongoose = require('mongoose');
var UserReviews = require('../models/userReview').UserReviews;

exports.getUserReview = function (req, res) {
    UserReviews.find({}, function (err, result) {
        if(err){
            res.status(500).json({
                success:false,
                message: ' Sorry! No result avaiable'
            });
        }
        else {
            res.status(200).json({
                success: true,
                data: result
            });
        }
    });
};