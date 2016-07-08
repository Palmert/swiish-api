var express = require('express');
var router = express.Router();
var Sequelize = require('sequelize');
const sequelize = new Sequelize('swiish_development', 'swiishuser', 'Rufus123', {
  host: 'localhost',
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

router.get('/', function(req, res, next) {
  sequelize
  .authenticate()
  .then(function(err) {
    console.log('Connection has been established successfully.');
  })
  .catch(function (err) {
    console.log('Unable to connect to the database:', err);
  });
});

module.exports = router;
