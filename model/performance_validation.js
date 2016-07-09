var sequelize = require('../database').sequelize;
var db = require('../database').db;

var PerformanceValidation = db.define('performance_validations', {
    performanceId: {
        type: sequelize.INTEGER,
        primaryKey: true,
        field: 'performance_id'
    },
    validationId: {
        type: sequelize.INTEGER,
        primaryKey: true,
        field: 'validation_id'
    }
});

module.exports = PerformanceValidation;
