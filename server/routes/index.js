var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = mongoose.model('User');
var passport = require('passport');
var jwt = require('express-jwt');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Express'
  });
});

/*
 ** register a new user
 */
router.post('/register', function(req, res, next) {
  if (!req.body.username || !req.body.password) {
    return res.status(400)
      .json({
        message: 'Please fill out all fields'
      });
  }

  var user = new User();

  user.username = req.body.username;
  user.setPassword(req.body.password);
  user.role = req.body.role;

  user.save(function(err) {
    if (err) {
      // return next(err);
      return res.json({ success: false, message: err });
    }

    return res.json({ success: true, message: 'Successfully created new user.' });
  });
});

/*
 ** login existing user
 */
router.post('/login', function(req, res, next) {
  if (!req.body.username || !req.body.password) {
    return res.status(400)
      .json({
        message: 'Please fill out all fields'
      });
  }

  passport.authenticate('local', function(err, user, info) {
    if (err) {
      return next(err);
    }

    if (user) {
      return res.json({
        success: true,
        username: user.username,
        role: user.role,
        token: user.generateJWT()
      });
    } else {
      return res.status(401)
        .json({
          success: false,
          message: info.message
        });
    }
  })(req, res, next);
});

module.exports = router;
