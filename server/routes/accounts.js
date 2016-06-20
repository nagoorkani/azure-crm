/**
 * Created by z062281 on 6/19/16.
 */
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Account = mongoose.model('Account');

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

    account.name            = req.body.name;
    account.email           = req.body.email;

    account.address.city    = req.body.address.city;
    account.address.country = req.body.address.country;
    account.address.street  = req.body.address.street;
    account.address.state   = req.body.address.state;
    account.address.landmark= req.body.address.landmark;
    account.address.street  = req.body.address.street;
    account.address.zip     = req.body.address.zip;

    account.phone.home      = req.body.phone.home;
    account.phone.mobile    = req.body.phone.mobile;
    account.phone.office    = req.body.phone.office;

    account.subsidiary      = req.body.subsidiary;
    account.branches        = req.body.branches;
    account.franchises      = req.body.franchises;
    account.proprietor      = req.body.proprietor;
    account.url             = req.body.url;

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

        account.name            = req.body.name ||  account.name;
        account.email           = req.body.email || account.email;

        account.address.city    = req.body.address.city || account.address.city;
        account.address.country = req.body.address.country || account.address.country;
        account.address.street  = req.body.address.street || account.address.street  ;
        account.address.state   = req.body.address.state || account.address.state   ;
        account.address.landmark= req.body.address.landmark || account.address.landmark;
        account.address.street  = req.body.address.street || account.address.street;
        account.address.zip     = req.body.address.zip || account.address.zip ;

        account.phone.home      = req.body.phone.home || account.phone.home ;
        account.phone.mobile    = req.body.phone.mobile || account.phone.mobile;
        account.phone.office    = req.body.phone.office || account.phone.office ;

        account.subsidiary      = req.body.subsidiary || account.subsidiary      ;
        account.branches        = req.body.branches || account.branches        ;
        account.franchises      = req.body.franchises || account.franchises     ;
        account.proprietor      = req.body.proprietor || account.proprietor      ;
        account.url             = req.body.url || account.url             ;

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