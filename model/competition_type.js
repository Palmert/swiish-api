var sequelize = require('../database').sequelize;
var db = require('../database').db;

var CompetitionType = db.define('competition_types', {
    id: {
        type: sequelize.UUID,
        primaryKey: true,
        defaultValue: sequelize.UUIDV1
    },
    type: {
        type: sequelize.STRING,
        allowNull: false,
    }
});

module.exports = CompetitionType;
