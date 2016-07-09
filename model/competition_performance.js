var sequelize = require('../database').sequelize;
var db = require('../database').db;

var CompetitionPerformance = db.define('competition_performances', {
    competitionId: {
        type: sequelize.INTEGER,
        primaryKey: true,
        field: 'competition_id'
    },
    performanceId: {
        type: sequelize.INTEGER,
        primaryKey: true,
        field: 'performance_id'
    }
});

module.exports = CompetitionPerformance;
