var sequelize = require('../database').sequelize;
var db = require('../database').db;

var TokenSource = db.define('token_sources', {
    id: {
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    source: {
        type: sequelize.STRING,
        allowNull: false,
    }
});

module.exports = TokenSource;