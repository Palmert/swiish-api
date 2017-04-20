var sequelize = require('../database').sequelize;
var db = require('../database').db;

var TokenSource = db.define('token_sources', {
    id: {
        type: sequelize.UUID,
        primaryKey: true,
        defaultValue: sequelize.UUIDV1
    },
    source: {
        type: sequelize.STRING,
        allowNull: false,
    }
});

module.exports = TokenSource;
