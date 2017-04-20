var sequelize = require('../database').sequelize;
var db = require('../database').db;

var Invitation = db.define('invitations', {
    id: {
        type: sequelize.UUID,
        primaryKey: true,
        defaultValue: sequelize.UUIDV1
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
