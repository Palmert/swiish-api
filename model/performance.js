var sequelize = require('../database').sequelize;
var db = require('../database').db;

var Performance = db.define('performances', {
    id: {
        type: sequelize.UUID,
        primaryKey: true,
        defaultValue: sequelize.UUIDV1
    },
    result: {
        type: sequelize.INTEGER,
        allowNull: false,
    },
    videoUrl: {
        type: sequelize.STRING,
        allowNull: false,
        field: 'video_url'
    },
    valid: {
        type: sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }
});

module.exports = Performance;
