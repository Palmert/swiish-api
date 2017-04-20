var express = require('express');
var router = express.Router();
var db = require('../database').db;
var User = require('../model/user');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
})

router.post('/', function(req, res) {
  console.log(req.body);
  return db.transaction(function (t) {
    return User.create({
        username: req.body.username,
        virtual_password: req.body.virtual_password
      });
  }).then(function (result) {
    console.log(result);
    res.send('success');
  }).catch(function (err) {
    console.log(err);
    res.status(500).send(err.name);
  });
})

module.exports = router;
