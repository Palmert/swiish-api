var sequelize = require('../database').sequelize;
var db = require('../database').db;

var PerformanceToken = db.define('performance_tokens', {
    performanceId: {
        type: sequelize.INTEGER,
        primaryKey: true
    },
    tokenId: {
        type: sequelize.INTEGER,
        primaryKey: true
    }
});

module.exports = PerformanceToken;
