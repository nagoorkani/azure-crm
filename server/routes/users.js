var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = mongoose.model('User');
var jwt = require('express-jwt');
var config = require('../config/main');

var auth = jwt({
  secret: config.secret,
  userProperty: 'payload'
});

/* GET users listing. */
router.get('/', function(req, res, next) {
  User.find({}, function (err, messages) {
    if (err) res.send(err);

    res.json(messages);
  })
});

router.get('/:user', function(req, res, next) {
  User.find({username: req.params.user}, function (err, messages) {
    if (err) res.send(err);

    res.json(messages);
  })
});

module.exports = router;
