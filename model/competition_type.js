var sequelize = require('../database').sequelize;
var db = require('../database').db;

var CompetitionType = db.define('competition_types', {
    id: {
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    type: {
        type: sequelize.STRING,
        allowNull: false,
    }
});

module.exports = CompetitionType;
