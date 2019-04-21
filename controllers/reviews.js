'use strict';

var mongoose = require('mongoose');
var assert = require('assert');
var UserReviews = require('../models/userReview').UserReviews;

exports.getUserReview = function (req, res) {
    var query = {};
    if(req.query.id){
        query['_id']=req.query.id;
    }
    UserReviews.find(query, function (err, result) {
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

exports.addUserReview = function (req, res) {
    var userReview = new UserReviews({
        _id: new mongoose.Types.ObjectId(),
        date: req.params.date,
        sku: req.body.sku,
        rating: req.body.rating,
        title: req.body.title,
        author: req.body.author,
        text: req.body.text,
        source: req.body.source,
    });
    userReview.save(function (err, result) {
        if(err){
            res.status(500).json({
                success: false,
                message: `Sorry! Unable to add review as : ${err.message}`
            });
        }
        else {
            res.status(200).json({
                success:true,
                message:'User Review Added'
            });
        }
    });
};


exports.deleteUserReview = function (req, res) {
    var id = req.params.id;
    UserReviews.remove({_id:id}, function (err, result) {
        if(err){
            res.status(500).json({
                success:false,
                message: 'Sorry! Invald User Review selected'
            });
        }
        else {
            res.status(200).json({
                success: true,
                message: 'User Review Deleted'
            });
        }
    });
};

exports.updateUserReview = function (req, res) {
    var id = req.params.id;
    if(!req.body.date){
        req.body.date=(new Date()).toISOString();
    }
    UserReviews.update({_id:id},{$set: req.body }, { runValidators: true },function (err, result) {
        if(err){
            //console.log(err);
            res.status(500).json({
                success: false,
                message: `Sorry! User Review cannot be updated because ${err.message}`
            });
        }
        else {
            res.status(200).json({
                success: true,
                message: "User Review updated"
            });
        }
    });
};


exports.getAvgRating = function (req, res) {
    var match={};
    if(req.query.sku){
        match["sku"] = req.query.sku;
    }
    UserReviews.aggregate([
        {
            $match : match
        },
        {

            $group : {
                _id: "$sku" ,
                AvgRating: {$avg: "$rating"},
            }
        },
        {
            $project: {
                _id : 0,
                SKU : "$_id",
                AverageRating: "$AvgRating",
                NumberOfReviews: {$sum: 1}
            }
        }
    ], function (err, result){
        if(err){
            //console.log(err);
            res.status(500).json({
                success: false,
                message: `Sorry! Error: ${err.message}`
            });
        }
        else {
            res.status(200).json({
                success: true,
                data: result
            });
        }
    }
    );
};

exports.getUserAvgRating = function (req, res) {
    var match={};
    if(req.query.user){
        match["author"] = req.query.user;
    }
    UserReviews.aggregate([
        {
            $match : match
        },
        {
            $group : {
                _id: "$author" ,
                AvgRating: {$avg: "$rating"},
            }
        },
        {
            $project: {
                _id : 0,
                User : "$_id",
                AverageRating: "$AvgRating",
                NumberOfReviews: {$sum: 1}
            }
        }
    ], function (err, result){
        if(err){
            //console.log(err);
            res.status(500).json({
                success: false,
                message: `Sorry! Error: ${err.message}`
            });
        }
        else {
            res.status(200).json({
                success: true,
                data: result
            });
        }
    }
    );
};
