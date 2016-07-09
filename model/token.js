var sequelize = require('../database').sequelize;
var db = require('../database').db;

var Token = db.define('tokens', {
  id: {
    type: sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  tokenSourceId: {
    type: sequelize.INTEGER,
    allowNull: false,
    field: 'token_source_id'
  }
});

module.exports = Token;
