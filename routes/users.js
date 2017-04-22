var express = require('express');
var router = express.Router();
var db = require('../database').db;
var User = require('../model/user');
var bcrypt = require('bcryptjs');


/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

router.post('/', function (req, res) {
    console.log(req.body);
    console.log(req.body.username);
    return db.transaction(function () {
        return User.create({
            username: req.body.username,
            password: req.body.password
        });
    }).then(function (result) {
        console.log(result);
        res.send('success');
    }).catch(function (err) {
        console.log(err);
        res.status(500).send(err.name);
    });
});

router.post('/login', function (req, res) {
    User.findOne({username : req.body.username}).then(function (user) {
        if (user && bcrypt.compareSync(req.body.password, user.password_hash)) {
            res.send("Login Success!");
        } else {
            res.status(500).send("Invalid username/password");
        }
    }, function (err) {
        res.status(500).send(err.name);
    });
});

module.exports = router;