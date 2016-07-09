var sequelize = require('../database').sequelize;
var db = require('../database').db;

var Validation = db.define('validations', {
    id: {
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    result: {
        type: sequelize.INTEGER,
        allowNull: false,
    },
    valid: {
        type: sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }
});

module.exports = Validation;
