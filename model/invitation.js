var sequelize = require('../database').sequelize;
var db = require('../database').db;

var Invitation = db.define('invitations', {
    id: {
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    email: {
        type: sequelize.STRING,
        allowNull: false,
    },
    code: {
        type: sequelize.STRING,
        allowNull: false,
    }
});

module.exports = Invitation;
