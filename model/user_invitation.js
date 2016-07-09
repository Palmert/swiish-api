var sequelize = require('../database').sequelize;
var db = require('../database').db;

var UserInvitation = db.define('user_invitations', {
    userId: {
        type: sequelize.INTEGER,
        primaryKey: true,
        field: 'user_id'
    },
    invitationId: {
        type: sequelize.INTEGER,
        primaryKey: true,
        field: 'invitation_id'
    }
});

module.exports = UserInvitation;
