/**
 * Created by z062281 on 6/19/16.
 */
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Order = mongoose.model('Order');

var _ = require('lodash');

// -------------- GET all Orders --------------
router.get('/', function(req, res) {
    Order.find({}, function (err, msg) {
        if (err) res.send(err);
        res.json(msg);
    });
});

// -------------- GET a Order --------------
router.get('/:id', function(req, res) {
    Order.find({'_id': req.params.id}, function (err, msg) {
        if (err) res.send(err);
        res.json(msg);
    });
});

// -------------- POST a Order --------------
router.post('/', function (req, res) {

    var order = new Order;

    order.orderId      = req.body.orderId;
    order.orderDate    = req.body.orderDate;
    order.completed    = req.body.completed;
    order.amount       = req.body.amount;
    order.accountId    = req.body.accountId;

    var productsColl = [];
    req.body.products.forEach(function(product) {
        productsColl.push({
            productId: product.productId,
            name: product.name,
            qty: product.qty,
            price: product.price,
            discount: product.discount,
            fulfillmentDate: product.fulfillmentDate
        });
    });
    order.products = productsColl;

    order.save(function (err, msg){
        if (err) {
            res.send({ success: false, message: err});
        } else {
            res.json({ success: true, message: 'New order added!'});
        }
    });
});

// -------------- Update a Category --------------
router.put('/:id', function (req, res) {

    Order.findOne({ '_id': req.params.id}, function (err, order) {
        if (err) return res.send(err);

        if(!order) { return res.send(404); }

        _.extend(order, req.body);

        order.save(function (err) {
            if (err) {
                res.send({ success: false, message: err});
            } else {
                res.json({ success: true, message: 'Order updated successfully!'});
            }
        });
    });
});

// -------------- Delete a Category --------------
router.delete('/:id', function (req, res) {

    Order.remove({ '_id': req.params.id }, function (err) {
        if (err) {
            res.send({ success: false, message: err});
        } else {
            res.json({ success: true, message: 'Order removed successfully!'});
        }
    });
});

module.exports = router;