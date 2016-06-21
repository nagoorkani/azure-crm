/**
 * Created by z062281 on 6/19/16.
 */
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Product = mongoose.model('Product');

var _ = require('lodash');

// -------------- GET all products --------------
router.get('/', function(req, res) {
    Product.find({}, function (err, msg) {
        if (err) res.send(err);
        res.json(msg);
    });
});

// -------------- GET a product --------------
router.get('/:id', function(req, res) {
    Product.find({'_id': req.params.id}, function (err, msg) {
        if (err) res.send(err);
        res.json(msg);
    });
});

// -------------- POST a product --------------
router.post('/', function (req, res) {

    var product = new Product;

    _.extend(product, req.body);

    product.save(function (err, product) {
        if (err) {
            res.send({ success: false, message: err});
        } else {
            res.json({ success: true, message: 'New product added!'});
        }
    });
});

// -------------- Update a product --------------
router.put('/:id', function (req, res) {
    Product.findOne({ '_id': req.params.id}, function (err, product) {
        if (err) return res.send(err);

        if(!product) { return res.send(404); }

        _.extend(product, req.body);

        product.save(function (err) {
            if (err) {
                res.send({ success: false, message: err});
            } else {
                res.json({ success: true, message: 'Product updated successfully!'});
            }
        })
    });
});

// -------------- Delete a product --------------
router.delete('/:id', function (req, res) {

    Product.remove({ '_id': req.params.id }, function (err) {
        if (err) {
            res.send({ success: false, message: err});
        } else {
            res.json({ success: true, message: 'Product removed successfully!'});
        }
    });
});

module.exports = router;