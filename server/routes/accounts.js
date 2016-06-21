/**
 * Created by z062281 on 6/19/16.
 */
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Account = mongoose.model('Account');

var _ = require('lodash');

// -------------- GET all Accounts --------------
router.get('/', function(req, res) {
    Account.find({}, function (err, msg) {
        if (err) res.send(err);
        res.json(msg);
    });
});

// -------------- GET a Account --------------
router.get('/:id', function(req, res) {
    Account.find({'_id': req.params.id}, function (err, msg) {
        if (err) res.send(err);
        res.json(msg);
    });
});

// -------------- POST a Account --------------
router.post('/', function (req, res) {

    var account = new Account;

    _.extend(account, req.body);

    account.save(function (err, account){
        if (err) {
            res.send({ success: false, message: err});
        } else {
            res.json({ success: true, message: 'New account added!'});
        }
    });
});

// -------------- Update a Account --------------
router.put('/:id', function (req, res) {
    Account.findOne({ '_id': req.params.id}, function (err, account) {
        if (err) return res.send(err);
        if(!account) { return res.send(404); }

        _.extend(account, req.body);

        account.save(function (err) {
            if (err) {
                res.send({ success: false, message: err});
            } else {
                res.json({ success: true, message: 'Account updated successfully!'});
            }
        })
    });
});

// -------------- Delete a Account --------------
router.delete('/:id', function (req, res) {

    Account.remove({ '_id': req.params.id }, function (err) {
        if (err) {
            res.send({ success: false, message: err});
        } else {
            res.json({ success: true, message: 'Account removed successfully!'});
        }
    });
});

module.exports = router;