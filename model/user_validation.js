var sequelize = require('../database').sequelize;
var db = require('../database').db;

var UserValidation = db.define('user_validations', {
    userId: {
        type: sequelize.INTEGER,
        primaryKey: true,
        field: 'user_id'
    },
    validationId: {
        type: sequelize.INTEGER,
        primaryKey: true,
        field: 'validation_id'
    }
});

module.exports = UserValidation;
