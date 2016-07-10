var sequelize = require('../database').sequelize;
var db = require('../database').db;

var Token = db.define('tokens', {
    id: {
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    }
});

module.exports = Token;
