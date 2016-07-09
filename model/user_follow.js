var sequelize = require('../database').sequelize;
var db = require('../database').db;

var UserFollow = db.define('user_follows', {
    userId: {
        type: sequelize.INTEGER,
        primaryKey: true,
        field: 'user_id'
    },
    followUserId: {
        type: sequelize.INTEGER,
        primaryKey: true,
        field: 'follow_user_id'
    }
});

module.exports = UserFollow;
