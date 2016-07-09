var sequelize = require('../database').sequelize;
var db = require('../database').db;

var UserToken = db.define('user_tokens', {
    userId: {
        type: sequelize.INTEGER,
        primaryKey: true,
        field: 'user_id'
    },
    tokenID: {
        type: sequelize.INTEGER,
        primaryKey: true,
        field: 'token_id'
    }
});

module.exports = UserToken;
