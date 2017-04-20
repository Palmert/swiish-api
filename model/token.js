var sequelize = require('../database').sequelize;
var db = require('../database').db;

var Token = db.define('tokens', {
    id: {
        type: sequelize.UUID,
        primaryKey: true,
        defaultValue: sequelize.UUIDV1
    }

});

module.exports = Token;
