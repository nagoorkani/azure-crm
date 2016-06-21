/**
 * Created by z062281 on 6/19/16.
 */
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Category = mongoose.model('Category');

var _ = require('lodash');

// -------------- GET all Categories --------------
router.get('/', function(req, res) {
    Category.find({}, function (err, msg) {
        if (err) res.send(err);
        res.json(msg);
    });
});

// -------------- GET a Category --------------
router.get('/:id', function(req, res) {
    Category.find({'_id': req.params.id}, function (err, msg) {
        if (err) res.send(err);
        res.json(msg);
    });
});

// -------------- POST a Category --------------
router.post('/', function (req, res) {

    var category = new Category;
    _.extend(category, req.body);

    category.save(function (err, category){
        if (err) {
            res.send({ success: false, message: err});
        } else {
            res.json({ success: true, message: 'New category added!'});
        }
    });
});

// -------------- Update a Category --------------
router.put('/:id', function (req, res) {
    Category.findOne({ '_id': req.params.id}, function (err, category) {
        if (err) return res.send(err);
        if(!category) { return res.send(404); }

        _.extend(category, req.body);

        category.save(function (err) {
            if (err) {
                res.send({ success: false, message: err});
            } else {
                res.json({ success: true, message: 'Category updated successfully!'});
            }
        })
    });
});

// -------------- Delete a Category --------------
router.delete('/:id', function (req, res) {

    Category.remove({ '_id': req.params.id }, function (err) {
        if (err) {
            res.send({ success: false, message: err});
        } else {
            res.json({ success: true, message: 'Category removed successfully!'});
        }
    });
});

module.exports = router;