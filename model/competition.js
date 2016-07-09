var sequelize = require('../database').sequelize;
var db = require('../database').db;

var Competition = db.define('competitions', {
    id: {
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    competitionTypeId: {
        type: sequelize.INTEGER,
        allowNull: false,
        field: 'competition_type_id'
    },
    daySpan: {
        type: sequelize.INTEGER,
        allowNull: false,
        field: 'day_span'
    },
    startedAt: {
        type: sequelize.DATE,
        allowNull: false,
        field: 'started_at'
    },
    endedAt: {
        type: sequelize.DATE,
        defaultValue: null,
        field: 'ended_at'
    }
});

module.exports = Competition;
