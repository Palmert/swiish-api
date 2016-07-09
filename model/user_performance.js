var sequelize = require('../database').sequelize;
var db = require('../database').db;

var UserPerformance = db.define('user_performances', {
    userId: {
        type: sequelize.INTEGER,
        primaryKey: true,
        field: 'user_id'
    },
    performanceId: {
        type: sequelize.INTEGER,
        primaryKey: true,
        field: 'performance_id'
    }
});

module.exports = UserPerformance;
